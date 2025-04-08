<template>
    <div class="home-page">
        <h3>Home Page</h3>
        <!--RouterLink组件中的to属性要写全路径-->
        <RouterLink class="btn" to="/home/shops">商品页</RouterLink>
        <RouterLink class="btn" to="/home/message">消息页</RouterLink>
        <RouterView></RouterView>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
}
</script>

<style scoped>
.btn{
    margin: 4px;
    padding: 3px 5px;
    text-decoration: none;
    border: 1px dashed #ddd;
}
</style>