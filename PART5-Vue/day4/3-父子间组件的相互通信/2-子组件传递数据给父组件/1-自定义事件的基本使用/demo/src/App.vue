<template>
    <div>
        <h4>当前计数: {{counter}}</h4>
        <!-- step3. 父组件监听子组件的事件 -->
        <CounterOperation @add="addOne()" @sub="subOne()"></CounterOperation>
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
        // step4. 当子组件中的自定义事件触发时 父组件中处理事件
        addOne() {
            this.counter++
        },
        subOne() {
            this.counter--
        },
    }
}
</script>

<style scoped>

</style>