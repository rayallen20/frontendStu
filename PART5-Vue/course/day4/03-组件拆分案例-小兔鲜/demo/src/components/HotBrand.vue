<template>
    <div class="hot">
        <div class="wrapper">
            <div class="title">
                <div class="left">
                    <h3>热门品牌</h3>
                    <p>国际经典 品质认证</p>
                </div>
                <div class="button">
                    <a href="#"><i class="iconfont icon-arrow-left-bold"></i></a>
                    <a href="#"><i class="iconfont icon-arrow-right-bold"></i></a>
                </div>
            </div>
            <div class="bd">
                <ul>
                    <li>
                        <a href="#">
                            <img src="@/assets/images/hot1.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="@/assets/images/hot2.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="@/assets/images/hot3.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="@/assets/images/hot4.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="@/assets/images/hot5.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HotBrand",
}
</script>

<style scoped>
/* 热门品牌 */
.hot {
    margin-top: 60px;
    padding-bottom: 40px;
    overflow: hidden;
    background-color: #F5F5F5;
}
.hot .title {
    position: relative;
    margin-bottom: 40px;
}
.hot .button {
    display: flex;
    position: absolute;
    right: 0;
    top: 47px;
}
.hot .button a {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #ddd;
    text-align: center;
    line-height: 20px;
    color: #fff;
}
.hot .button a:nth-child(2) {
    margin-left: 12px;
    background-color: #00BE9A;
}
.hot .bd ul {
    display: flex;
    justify-content: space-between;
}
.hot .bd li {
    width: 244px;
    height: 306px;
}
</style>