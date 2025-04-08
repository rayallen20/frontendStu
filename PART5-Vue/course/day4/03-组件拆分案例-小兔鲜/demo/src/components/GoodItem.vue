<template>
    <li>
        <a href="#">
            <div class="pic">
                <!-- 1. @是webpack环境默认的一个路径别名,表示`src/` -->
                <!-- 2. require()是webpack默认模拟的一个行为,模拟Node环境中的require()函数,浏览器是不支持的,是webpack支持的 -->
                <img :src="require(`@/assets/images/${good.src}`)" alt="" />
            </div>
            <div class="txt">
                <h4>{{good.title}}</h4>
                <p>¥ <span>{{good.price}}</span></p>
            </div>
        </a>
    </li>
</template>

<script>
export default {
    name: "GoodItem",
    props: {
        good: {
            type: Object,
            validate(good) {
                if (!Object.prototype.hasOwnProperty.call(good, 'src')) {
                    console.error('商品数据缺少src属性')
                    return false
                }

                if (!Object.prototype.hasOwnProperty.call(good,'title')) {
                    console.error('商品数据缺少title属性')
                    return false
                }

                if (!Object.prototype.hasOwnProperty.call(good,'price')) {
                    console.error('商品数据缺少price属性')
                    return false
                }
            },
            required: true
        }
    },
}
</script>

<style scoped>
li {
    width: 304px;
    height: 404px;
    background-color: #EEF9F4;
}
li {
    display: block;
}
li .pic {
    width: 304px;
    height: 304px;
}
li .txt {
    text-align: center;
}
li h4 {
    margin-top: 17px;
    margin-bottom: 8px;
    font-size: 20px;
}
li p {
    font-size: 18px;
    color: #AA2113;
}
li p span {
    font-size: 22px;
}
</style>