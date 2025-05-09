<template>
    <div class="use-computed-read-store"></div>
    <h4>Home: {{counter}}</h4>
    <h4>Home: {{$store.state.counter}}</h4>
</template>

<script setup>
import {useStore} from "vuex"
import {computed} from "vue"

// eslint-disable-next-line
defineOptions({
    name: 'UseComputedReadStore'
})

const store = useStore()
const counter = computed({
    get() {
        return store.state.counter
    },
})
</script>