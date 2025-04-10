<template>
    <div class="home-page">
        <!-- 二级路由的出口 -->
        <RouterView v-slot="{ Component }">
            <KeepAlive :include="['ArticlePage']">
                <component :is="Component" />
            </KeepAlive>
        </RouterView>

        <van-tabbar route>
            <van-tabbar-item icon="home-o" :to="{name: 'articleHome'}">首页</van-tabbar-item>
            <van-tabbar-item icon="star-o" :to="{name: 'collectHome'}">收藏</van-tabbar-item>
            <van-tabbar-item icon="like-o" :to="{name: 'likeHome'}">喜欢</van-tabbar-item>
            <van-tabbar-item icon="user-o" :to="{name: 'userHome'}">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
}
</script>

<style lang="less" scoped>
</style>
