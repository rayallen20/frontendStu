<template>
    <div>
        <button @click="increment()">+1</button>
        <button @click="decrement()">-1</button>
        <input type="number" v-model="num">
        <button @click="addN()">+n</button>
    </div>
</template>

<script>
export default {
    name: 'CounterOperation',
    emits: ['add', 'sub', 'addN'],
    data() {
        return {
            num: 0,
        }
    },
    methods: {
        increment() {
            this.$emit('add')
        },
        decrement() {
            this.$emit('sub')
        },
        addN() {
            // 触发自定义事件时传递参数
            this.$emit('addN', this.num)
            this.num = 0
        }
    }
}
</script>

<style scoped>
button, input{
    margin: 0 2px;
}
</style>