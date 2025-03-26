# 3-深度选择器

- `::v-global`伪类: 在Vue3.5.0及以上版本,`::v-global()`用于在scoped样式中定义全局CSS规则,即使scoped作用域生效,它仍然能影响子组件或全局元素

- 子组件Hello.vue:

```vue
<template>
    <h4>Hello World in Child Component</h4>
    <h4 class="msg">Hello Msg</h4>
</template>

<script>
export default {
    name: 'Hello'
}
</script>

<style scoped>
</style>
```

- 父组件App.vue:

```vue
<template>
    <h4>App Title</h4>
    <Hello class="hello"></Hello>
</template>


<script>
import Hello from './components/Hello.vue'

export default {
    name: 'App',
    components: {
        Hello,
    }
}
</script>

<style scoped>
h4 {
    text-decoration: underline;
}

.hello ::v-global(.msg) {
    color: red;
}
</style>
```