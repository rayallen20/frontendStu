<template>
    <div class="use-computed-read-store"></div>
    <h4>Home: {{$store.state.counter}}</h4>
    <h4>Home: {{counter}}</h4>
    <h4>Name: {{name}}</h4>
    <h4>Age: {{myAge}}</h4>
</template>

<script setup>
import {useStore} from "vuex"
import {computed} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'ReadStateInSetup',
})

const store = useStore()

const counter = computed({
    get: () => store.state.counter,
})

const name = computed({
    get: () => store.state.name,
})

const myAge = computed({
    get: () => store.state.age,
})
</script>