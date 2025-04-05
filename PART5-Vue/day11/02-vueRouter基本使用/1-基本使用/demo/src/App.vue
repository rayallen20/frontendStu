<template>
    <div class="nav">
        <!--
        <RouterLink>组件: 用于定义导航链接,点击该组件时,可实现路由切换(即URL路径切换)
        <RouterLink>组件的to属性: 用于指定单击切换后的路径 也就是在router/index.js中定义的路由路径
        -->
        <RouterLink class="tab" to="/home">首页</RouterLink>
        <RouterLink class="tab" to="/about">关于</RouterLink>
    </div>

    <!--
    <RouterView>组件: 用于渲染路由匹配到的组件 放在这里相当于组件的占位符
    -->
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