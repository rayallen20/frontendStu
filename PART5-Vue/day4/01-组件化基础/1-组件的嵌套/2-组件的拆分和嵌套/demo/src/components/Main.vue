<template>
    <div class="main">
        <!--step3. 使用组件-->
        <MainBanner></MainBanner>
        <MainProductList></MainProductList>
    </div>
</template>
<script>
// step1. 导入轮播图和商品列表组件
import MainBanner from "./MainBanner.vue"
import MainProductList from "./MainProductList.vue"

export default {
    name: 'Main',
    // step2. 注册局部组件
    components: {
        MainBanner,
        MainProductList
    }
}
</script>