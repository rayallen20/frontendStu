<template>
    <div class="composition-api-example">
        <div>当前计数: {{counter}}</div>
        <div>当前计数 * 2: {{doubleCounter}}</div>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
    name: 'CompositionApiExample',
    setup() {
        const counter = ref(100)

        const doubleCounter = computed({
            get() {
                return counter.value * 2
            }
        })

        const increment = () => counter.value++

        const decrement = () => counter.value--

        return {
            counter,
            doubleCounter,
            increment,
            decrement
        }
    }
}
</script>