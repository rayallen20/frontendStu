<template>
    <div class="use-modules">
        <h4>homeCounter: {{$store.state.home.homeCounter}}</h4>
        <h4>userCounter: {{$store.state.user.userCounter}}</h4>
        <button @click="incrementUserCounterAction">incrementUserCounterAction</button>
        <button @click="incrementHomeCounterAction">incrementHomeCounterAction</button>
    </div>
</template>

<script setup>
import {useStore} from "vuex"

// eslint-disable-next-line
defineOptions({
    name: 'UseModules'
})

const store = useStore()

const incrementUserCounterAction = () => {
    store.dispatch('home/incrementUserCounterAction')
}

const incrementHomeCounterAction = () => {
    store.dispatch('user/incrementHomeCounterAction')
}
</script>