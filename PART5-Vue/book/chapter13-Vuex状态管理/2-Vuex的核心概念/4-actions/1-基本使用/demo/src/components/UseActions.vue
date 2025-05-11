<template>
    <div class="use-mutations">
        <h4>当前计数: {{$store.state.counter}}</h4>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script setup>
import {useStore} from "vuex"

// eslint-disable-next-line
defineOptions({
    name: 'UseActions'
})

const store = useStore()

// 分发action
const increment = () => store.dispatch('incrementAction')

const decrement = () => store.dispatch('decrementAction')
</script>