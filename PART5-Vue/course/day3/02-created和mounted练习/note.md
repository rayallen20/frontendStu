# 02-created和mounted练习

- created: 实例创建完毕,通常在这个阶段发送AJAX请求
- mounted: 实例挂载完毕,通常在这个阶段进行DOM操作

- created练习:

```vue
<template>
    <div class="created-demo">
        <ul>
            <li v-for="news in newsList" :key="news.id" class="news">
                <div class="left">
                    <div class="title">{{news.title}}</div>
                    <div class="info">
                        <span>{{news.source}}</span>
                        <span>{{news.time}}</span>
                    </div>
                </div>
                <div class="right">
                    <img :src="news.img" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'CreatedDemo',
    data() {
        return {
            newsList: []
        }
    },
    async created() {
        const data = await axios.get('http://hmajax.itheima.net/api/news')
        this.newsList = data.data.data
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
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
```

- mounted练习: 页面加载完成后自动获取焦点

```vue
<template>
    <div class="mounted-demo">
        <div class="search-container">
            <img src="https://www.itheima.com/images/logo.png" alt="">
            <div class="search-box">
                <input type="text" v-model="words" id="inp">
                <button>搜索一下</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MountedDemo',
    data() {
        return {
            words: ''
        }
    },
    mounted() {
        // DOM渲染完成后 自动获取焦点
        const inputEle = document.querySelector('#inp')
        inputEle.focus()
    },
}
</script>

<style scoped>
html,
body {
    height: 100%;
}
.search-container {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
.search-container .search-box {
    display: flex;
}
.search-container img {
    margin-bottom: 30px;
}
.search-container .search-box input {
    width: 512px;
    height: 16px;
    padding: 12px 16px;
    font-size: 16px;
    margin: 0;
    vertical-align: top;
    outline: 0;
    box-shadow: none;
    border-radius: 10px 0 0 10px;
    border: 2px solid #c4c7ce;
    background: #fff;
    color: #222;
    overflow: hidden;
    box-sizing: content-box;
    -webkit-tap-highlight-color: transparent;
}
.search-container .search-box button {
    cursor: pointer;
    width: 112px;
    height: 44px;
    line-height: 41px;
    line-height: 42px;
    background-color: #ad2a27;
    border-radius: 0 10px 10px 0;
    font-size: 17px;
    box-shadow: none;
    font-weight: 400;
    border: 0;
    outline: 0;
    letter-spacing: normal;
    color: white;
}
body {
    background: no-repeat center /cover;
    background-color: #edf0f5;
}
</style>
```