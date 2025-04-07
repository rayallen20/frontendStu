<template>
    <div class="discover-music">
        <div class="discover-nav">
            <RouterLink class="discover-item" active-class="link-active" :to="{name: 'discoverRecommend'}">推荐</RouterLink>
            <RouterLink class="discover-item" active-class="link-active" :to="{name: 'discoverRank'}">排行榜</RouterLink>
            <RouterLink class="discover-item" active-class="link-active" :to="{name: 'discoverSinger'}">歌手</RouterLink>
        </div>

        <RouterView></RouterView>
    </div>
</template>

<script>
export default {
    name: 'DiscoverMusic',
}
</script>

<style>
.discover-music {
    padding: 15px;
}

.discover-item {
    padding-right: 10px;
    text-decoration: none;
    color: #424242;
}

.link-active {
    color: darkseagreen;
}
</style>