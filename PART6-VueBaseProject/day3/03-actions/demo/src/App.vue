<template>
    <div class="app">
        <h4>当前计数: {{$store.state.counter}}</h4>
        <button @click="incrementAction">+1</button>
        <button @click="decrementAction">-1</button>
        <br>
        <input type="number" v-model="num" />
        <button @click="incrementByAction({num})">+{{num}}</button>
    </div>
</template>

<script setup>
import {ref} from "vue"
import {useAction} from "@/hooks/useAction"

// eslint-disable-next-line
defineOptions({
    name: 'App'
})

const num = ref(0)

const {incrementAction, decrementAction, incrementByAction} = useAction([
    'incrementAction',
    'decrementAction',
    'incrementByAction',
])
</script>

<style scoped>

</style>
