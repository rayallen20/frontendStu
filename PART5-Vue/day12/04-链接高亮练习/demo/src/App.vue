<template>
    <div class="app">
        <div class="nav">
            <RouterLink class="link" active-class="link-active" :to="{name: 'discover'}">发现音乐</RouterLink>
            <RouterLink class="link" active-class="link-active" :to="{name: 'myMusic'}">我的音乐</RouterLink>
            <RouterLink class="link" active-class="link-active" :to="{name: 'myFollow'}">我的关注</RouterLink>
        </div>

        <RouterView></RouterView>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style scoped>
.nav {
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

.link-active {
    color: red;
}
</style>