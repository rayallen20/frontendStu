<template>
    <div class="box">
        <h3>需求1：让输入框立即获取焦点</h3>
        <div class="focus">
            <!-- 使用自定义指令 -->
            <input type="text" v-focus/>
        </div>
        <h3>需求2：Ajax请求数据，并设计loading指令</h3>
        <ul v-loading="list.length">
            <li class="news" v-for="item in list" :key="item.id">
                <div class="left">
                    <div class="title">{{item.title}}</div>
                    <div class="info">
                        <span>{{item.source}}</span>
                        <span>{{item.time}}</span>
                    </div>
                </div>
                <div class="right">
                    <img :src="item.img" alt="" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
export default {
    directives: {
        // 自定义指令
        focus: {
            // 指令的钩子函数
            mounted (el) {
                // 让输入框获取焦点
                el.focus()
            }
        },
        loading: {
            // DOM元素创建时 立即判断是否要转菊花
            created(el, binding) {
                // binding.value 是指令传入的值
                const length = binding.value
                if (length === 0) {
                    el.classList.add('loading')
                }
            },
            updated(el, binding) {
                const length = binding.value
                if (length > 0) {
                    el.classList.remove('loading')
                    return
                }

                el.classList.add('loading')
            }
        }
    },
    data() {
        return {
            list: []
        }
    },
    async created() {
        // 发送ajax请求
        const { data: res } = await axios.get('http://hmajax.itheima.net/api/news')
        // console.log(res)

        // 延迟2s将数据保存到data中 模拟慢请求
        setTimeout(() => {
            this.list = res.data
        }, 2000)
    }
}
</script>

<style>
.loading::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ffffff url("./loading.gif") no-repeat;
    content: '';
}

.box {
    width: 800px;
    min-height: 500px;
    position: relative;
}
.focus,
ul {
    border: 3px solid orange;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}
.news {
    display: flex;
    height: 120px;
    width: 600px;
    margin: 0 auto;
    padding: 20px 0;
    cursor: pointer;
}
.news .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 10px;
}
.news .left .title {
    font-size: 20px;
}
.news .left .info {
    color: #999999;
}
.news .left .info span {
    margin-right: 20px;
}
.news .right {
    width: 160px;
    height: 120px;
}
.news .right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
