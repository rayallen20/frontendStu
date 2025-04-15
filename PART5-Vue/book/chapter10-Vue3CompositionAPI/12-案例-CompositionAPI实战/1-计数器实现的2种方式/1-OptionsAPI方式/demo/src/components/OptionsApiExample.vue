<template>
    <div class="options-api-example">
        <div>当前计数: {{counter}}</div>
        <div>当前计数 * 2: {{doubleCounter}}</div>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
export default {
    name: 'OptionsApiExample',
    data() {
        return {
            counter: 100,
        }
    },
    computed: {
        doubleCounter() {
            return this.counter * 2
        },
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        },
    },
}
</script>