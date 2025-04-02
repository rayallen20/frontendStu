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
    data() {
        return {
            friends: ['lisi', 'wangWu']
        }
    },
    components: {
        Home
    },
    provide() {
        return {
            name: 'zhangSan',
            age: 18,
            friends: this.friends
        }
    },
}
</script>