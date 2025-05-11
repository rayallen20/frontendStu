<template>
    <div class="use-actions">
        <h4>当前计数: {{$store.state.counter}}</h4>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <input type="number" v-model="num">
        <button @click="incrementBy">+{{num}}</button>
    </div>
</template>

<script setup>
import {useStore} from "vuex"
import {ref} from "vue"

// eslint-disable-next-line
defineOptions({
    name: 'UseActions'
})

const num = ref(0)

const store = useStore()

const increment = () => store.dispatch('incrementAction')

const decrement = () => store.dispatch('decrementAction')

const incrementBy = () => store.dispatch('incrementByAction', {num: num.value})
</script>