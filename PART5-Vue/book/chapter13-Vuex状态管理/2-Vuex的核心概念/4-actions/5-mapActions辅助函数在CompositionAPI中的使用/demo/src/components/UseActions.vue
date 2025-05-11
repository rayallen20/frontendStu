<template>
    <div class="use-actions">
        <h4>当前计数: {{$store.state.counter}}</h4>
        <button @click="incrementAction()">+1</button>
        <button @click="decrementAction">-1</button>
        <input type="number" v-model="num">
        <button @click="incrementByAction({num})">+{{num}}</button>
    </div>
</template>

<script setup>
import {ref} from "vue"
import {useActions} from "@/hooks"

// eslint-disable-next-line
defineOptions({
    name: 'UseActions'
})

const num = ref(0)

const {incrementAction, decrementAction, incrementByAction} = useActions([
    'incrementAction',
    'decrementAction',
    'incrementByAction',
])
</script>