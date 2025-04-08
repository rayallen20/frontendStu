<template>
    <div class="App">
        <!-- 快捷链接  -->
        <ShortCut></ShortCut>

        <!-- 头部导航  -->
        <NavHeader></NavHeader>

        <!-- 轮播区域 -->
        <BannerArea></BannerArea>

        <!-- 新鲜好物 -->
        <GoodsArea></GoodsArea>

        <!-- 热门品牌 -->
        <HotBrand></HotBrand>

        <!-- 最新专题 -->
        <NewestTopic></NewestTopic>

        <!-- 版权底部 -->
        <CopyrightFooter></CopyrightFooter>
    </div>
</template>

<script>
import ShortCut from "./components/ShortCut.vue"
import NavHeader from "./components/NavHeader.vue"
import BannerArea from "./components/BannerArea.vue"
import GoodsArea from "./components/GoodsArea.vue"
import HotBrand from "./components/HotBrand.vue"
import NewestTopic from "./components/NewestTopic.vue"
import CopyrightFooter from "./components/CopyrightFooter.vue"

export default {
    name: 'App',
    components: {
        ShortCut,
        NavHeader,
        BannerArea,
        GoodsArea,
        HotBrand,
        NewestTopic,
        CopyrightFooter,
    },
}
</script>

<style></style>
