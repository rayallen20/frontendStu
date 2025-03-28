<template>
    <div class="app">
        App
        <Home></Home>
    </div>
</template>

<script>
import Home from "./components/Home.vue"
export default {
    name: 'App',
    components: {
        Home
    },
    // 祖代组件使用provide属性为后代组件提供值
    provide: {
        name: 'zhangSan',
        age: 18,
        friends: ['lisi', 'wangWu']
    }
}
</script>