<template>
    <div>
        <h4>当前计数: {{counter}}</h4>
        <CounterOperation @add="addOne()" @sub="subOne()" @addN="addNum"></CounterOperation>
    </div>
</template>

<script>
import CounterOperation from './components/CounterOperation.vue'
export default {
    name: 'App',
    components: {
        CounterOperation,
    },
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        addOne() {
            this.counter++
        },
        subOne() {
            this.counter--
        },
        // 父组件中的事件处理函数接收子组件传递的参数
        addNum(num) {
            this.counter += num
        }
    }
}
</script>

<style scoped>

</style>