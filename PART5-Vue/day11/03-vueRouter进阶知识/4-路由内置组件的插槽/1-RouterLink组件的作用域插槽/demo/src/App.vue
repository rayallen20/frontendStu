<template>
    <div class="nav">
        <RouterLink class="tab" to="/user/why/id/001">用户</RouterLink>
        <RouterLink class="tab" to="/about?name=coder&age=20">关于</RouterLink>

        <!--
            当指定了<RouterLink>的custom属性时 则该组件不会自动渲染默认的a标签
            而是将渲染控制权完全通过props传递给开发者
            此时 <RouterLink>组件不会渲染任何DOM元素 因此不能直接给<RouterLink>指定class
            因此需要把class移动到<RouterLink>的内部元素中
        -->
        <RouterLink to="/home" custom v-slot="props">
            <span class="tab">
                <!-- props.navigate: 跳转到当前路由组件的方法 -->
                <strong @click="props.navigate">首页: </strong>
                <!-- props.href: 当前路由组件的路由 -->
                <span>{{props.href}}</span>
                -
                <!-- props.isActive: 当前路由组件是否被匹配 -->
                <span>{{props.isActive}}</span>
            </span>
        </RouterLink>
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