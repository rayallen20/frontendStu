<template>
    <div class="setup-return">
        <h4>当前计数: {{counter}}</h4>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {ref} from "vue"

export default {
    setup() {
        const counter = ref(100)

        const increment = () => {
            counter.value++
            console.log(counter.value)
        }

        return {
            counter,
            increment
        }
    }
}
</script>