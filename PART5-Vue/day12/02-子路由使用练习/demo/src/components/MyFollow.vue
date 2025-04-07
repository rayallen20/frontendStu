<template>
    <div class="my-follow">
        <h3>关注的榜单</h3>
        <span class="follow-item">新歌榜</span>
        <span class="follow-item">热歌榜</span>

        <h3>关注的歌手</h3>
        <span class="follow-item">张惠妹</span>
        <span class="follow-item">薛之谦</span>
    </div>
</template>

<script>
export default {
    name: 'MyFollow',
}
</script>

<style scoped>
.my-follow {
    padding: 15px;
}

.my-follow h3 {
    margin: 0;
}

.follow-item {
    display: inline-block;
    margin: 10px;
    text-decoration: none;
    color: #424242;
}
</style>