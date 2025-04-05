<template>
    <div class="nav">
        <RouterLink class="tab" :to="{path: '/home'}" exact-active-class="why-coder">首页</RouterLink>
        <RouterLink class="tab" to="/about" replace active-class="why">关于</RouterLink>
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

.why {
    color: red;
}

.why-coder {
    color: blue;
}
</style>