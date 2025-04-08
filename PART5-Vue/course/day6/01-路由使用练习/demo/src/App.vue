<template>
    <div class="app">
        <RouterLink class="link" :to="{name: 'discover'}">发现音乐</RouterLink>
        <RouterLink class="link" :to="{name: 'myMusic'}">我的音乐</RouterLink>
        <RouterLink class="link" :to="{name: 'myFollow'}">我的关注</RouterLink>
    </div>

    <RouterView></RouterView>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style scoped>
.app {
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    text-align: center;
    background: #333333;
    color: #cccccc;
}

.link {
    flex: 1;
    text-decoration: none;
    padding: 20px 0;
    line-height: 20px;
    background: #333333;
    color: #cccccc;
}

.link:hover {
    background: #555555;
}
</style>