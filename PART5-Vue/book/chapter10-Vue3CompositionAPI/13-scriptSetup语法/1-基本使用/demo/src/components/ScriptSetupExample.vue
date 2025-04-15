<template>
    <div class="script-setup-example">
        <h4>当前计数: {{counter}}</h4>
        <button @click="increment">+1</button>
    </div>
</template>

<script setup>
import {ref} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'ScriptSetupExample'
})

const counter = ref(0)

const increment = () => counter.value++
</script>

<style scoped>

</style>