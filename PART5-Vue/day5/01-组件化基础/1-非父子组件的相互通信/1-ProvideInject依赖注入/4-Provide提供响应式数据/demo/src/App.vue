<template>
    <div class="app">
        App
        <Home></Home>
        <button @click="addFriend">addFriend</button>
    </div>
</template>

<script>
import Home from "./components/Home.vue"
import {computed} from "vue"
export default {
    name: 'App',
    data() {
        return {
            friends: ['lisi', 'wangWu']
        }
    },
    methods: {
        addFriend() {
            this.friends.push('zhaoLiu')
            console.log(this.friends)
        }
    },
    components: {
        Home
    },
    provide() {
        return {
            name: 'zhangSan',
            age: 18,
            friends: this.friends,
            // 使用计算属性: computed()函数返回的是一个ref响应式对象
            friendLength: computed(() => this.friends.length)
        }
    },
}
</script>