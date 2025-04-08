# 3-缓存组件实例的生命周期

对缓存组件来说,再次进入时,不会再次执行`created`和`mounted`钩子函数,而是直接使用之前的实例,所以不会执行`created`和`mounted`钩子函数.

但是可能确实需要监听组件重新载入和销毁的事件,可以使用`activated`和`deactivated`钩子函数来监听组件的激活和停用事件.

- `AboutCpn.vue`:

```vue
<template>
    <div class="about-cpn">
        About组件
        <button @click="add">点击递增: {{counter}}</button>
    </div>
</template>

<script>
export default {
    name: 'AboutCpn',
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add() {
            this.counter++
        },
    },
    created() {
        console.log('About组件的created生命周期')
    },
    unmounted() {
        console.log('About组件的unmounted生命周期')
    },
    // 组件显示时的回调
    activated() {
        console.log('About组件的activated生命周期')
    },
    // 组件隐藏时的回调
    deactivated() {
        console.log('About组件的deactivated生命周期')
    },
}
</script>

<style scoped>

</style>
```

切换该组件的显隐时,控制台显示:

```
About组件的created生命周期
About组件的activated生命周期
About组件的deactivated生命周期
About组件的activated生命周期
About组件的deactivated生命周期
```