<template>
    <div>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
export default {
    name: 'CounterOperation',
    // step1. 定义子组件自身要触发的自定义事件
    // (这些事件需要在父组件中监听和处理)
    emits: ['add', 'sub'],
    methods: {
        increment() {
            // step2. 触发自定义事件
            this.$emit('add')
        },
        decrement() {
            this.$emit('sub')
        }
    }
}
</script>

<style scoped>
button, input{
    margin: 0 2px;
}
</style>