<template>
    <div class="use-computed-read-store"></div>
    <h4>Home: {{$store.state.counter}}</h4>
    <h4>Home: {{storeState.counter}}</h4>
    <h4>Name: {{storeState.name}}</h4>
    <h4>Age: {{storeState.age}}</h4>
</template>

<script setup>
import {useState} from "@/hooks"

// eslint-disable-next-line
defineOptions({
    name: 'UseMapState',
})

const storeMapper = [
    'counter',
    'name',
    'age'
]

const storeState = useState(storeMapper)
</script>