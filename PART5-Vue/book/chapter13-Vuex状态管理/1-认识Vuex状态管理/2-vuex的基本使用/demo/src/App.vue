<template>
    <div class="app">
        当前计数: {{ $store.state.counter }}
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
import {useStore} from "vuex"

export default {
    name: 'App',
    methods: {
        increment() {
            // Options API语法触发调用mutations的方法
            this.$store.commit('increment')
        }
    },
    setup() {
        // Composition API语法触发调用mutations的方法
        // setup()函数中不能使用this 需要使用useStore()函数获取全局的store对象
        const store = useStore()
        const decrement = () => {
            store.commit('decrement')
        }

        return {
            decrement,
        }
    }
}
</script>