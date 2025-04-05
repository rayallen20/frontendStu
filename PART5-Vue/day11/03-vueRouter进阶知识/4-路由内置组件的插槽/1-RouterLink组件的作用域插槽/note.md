# 1-RouterLink组件的作用域插槽

`<RouterLink>`组件通过一个作用域插槽,暴露了底层定制的能力(说白了就是定制`<RouterLink>`组件的样式和行为的能力,默认该组件将内容渲染为一个`<a>`标签).使用方式:

- step1. 为`<RouterLink>`组件添加`custom`属性,表示该组件要自定义
  - 若不添加该属性,则整个`<RouterLink>`组件会被渲染为一个`<a>`标签
- step2. 在`<RouterLink>`组件中使用`v-slot`指令,获取到作用域插槽的内容
  - href: 该属性表示路由跳转的地址
  - route: 该属性表示路由跳转的对象
  - navigate: 触发导航的函数
  - isActive: 该属性表示当前路由的匹配状态
  - isExactActive: 该属性表示当前路由的精准匹配状态

```vue
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
```

- 注意: 当指定了`<RouterLink>`的`custom`属性时,该组件不会自动渲染默认的`<a>`标签,而是将渲染控制权完全通过props传递给开发者.此时 `<RouterLink>`组件不会渲染任何DOM元素,因此不能直接给`<RouterLink>`指定class,因此需要把class移动到`<RouterLink>`的内部元素中,否则控制台会提示
- `v-slot="props"`中的`props`包含了一些关于`<RouterLink>`组件的属性,可以通过`props`来获取到这些属性
- `props.navigate`方法: 若当前路由已经是该组件的路由时,则该方法不会再次刷新页面或跳转(即不会产生网络请求);只有在当前路由不是该组件的路由时,才会触发跳转
- 这一整套机制相当于可以定制`<RouterLink>`组件的样式,不再使用默认的`<a>`标签