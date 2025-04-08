<template>
    <div class="nav">
        <RouterLink class="tab" to="/home">用户</RouterLink>
        <RouterLink class="tab" to="/about">关于</RouterLink>
    </div>
    <RouterView></RouterView>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style scoped>
.nav{
    margin: 20px 0;
}
.tab{
    border: 1px solid #ddd;
    margin-right: 8px;
    padding: 2px 20px;
    text-decoration: none;
}
</style>