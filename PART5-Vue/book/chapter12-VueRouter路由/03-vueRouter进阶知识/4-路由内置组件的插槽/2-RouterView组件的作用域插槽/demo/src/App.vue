<template>
    <div class="nav">
        <RouterLink class="tab" to="/user/why/id/001">用户</RouterLink>
        <RouterLink class="tab" to="/about?name=coder&age=20">关于</RouterLink>

        <RouterLink to="/home" custom v-slot="props">
            <span class="tab">
                <strong @click="props.navigate">首页: </strong>
                <span>{{props.href}}</span>
                -
                <span>{{props.isActive}}</span>
            </span>
        </RouterLink>
    </div>

    <!-- <RouterView>组件的作用域插槽会传递一个props对象 该对象中包含了当前路由匹配的组件信息 -->
    <RouterView v-slot="props">
        <Transition name="why">
            <!-- props.Component 表示当前路由匹配到的组件 使用该属性可以动态渲染当前路由对应的组件 -->
            <Component :is="props.Component"></Component>
        </Transition>
    </RouterView>
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

.why-enter-from,
.why-leave-to {
    opacity: 0;
}

.why-enter-active,
.why-leave-active {
    transition: all 0.5s ease;
}

.why-enter-to,
.why-leave-from {
    opacity: 1;
}
</style>