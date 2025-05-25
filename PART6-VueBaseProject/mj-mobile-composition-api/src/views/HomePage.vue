<template>
    <div class="home-page">
        <RouterView v-slot="{ Component }">
            <KeepAlive :include="['ArticlePage']">
                <component :is="Component" />
            </KeepAlive>
        </RouterView>
        <van-tabbar route>
            <van-tabbar-item icon="home-o" :to="{name: 'articleHome'}">面经</van-tabbar-item>
            <van-tabbar-item icon="star-o" :to="{name: 'collectHome'}">收藏</van-tabbar-item>
            <van-tabbar-item icon="like-o" :to="{name: 'likeHome'}">喜欢</van-tabbar-item>
            <van-tabbar-item icon="user-o" :to="{name: 'userHome'}">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: 'HomePage',
})
</script>

<style scoped lang="less">

</style>