<template>
    <div class="app">
        <h4>当前计数: {{$store.state.counter}}</h4>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <br>
        <input type="number" v-model="num" />
        <button @click="incrementBy({num})">+{{num}}</button>
    </div>
</template>

<script setup>
import {useMutation} from "@/hooks/useMutation"
import {ref} from "vue"

// eslint-disable-next-line
defineOptions({
    name: 'App'
})

const num = ref(0)

const {increment, decrement, incrementBy} = useMutation([
    'increment',
    'decrement',
    'incrementBy'
])
</script>

<style scoped>

</style>
