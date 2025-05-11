<template>
    <div class="use-modules">
        <h4>root state: {{$store.state.counter}}</h4>
        <h4>home state: {{$store.state.home.homeCounter}}</h4>
        <h4>home getter: doubleHomeCounter :{{$store.getters['home/doubleHomeCounter']}}</h4>
        <h4>home getter: homeCounterAddRootCounter :{{$store.getters['home/homeCounterAddRootCounter']}}</h4>
        <h4>home getter: doubleRootCounter :{{$store.getters['home/doubleRootCounter']}}</h4>
        <button @click="incrementAction">homeCounter +1</button>
        <button @click="incrementRootAction">root state counter +1</button>
    </div>
</template>

<script setup>
import {useStore} from "vuex"

// eslint-disable-next-line
defineOptions({
    name: 'UseModules'
})

const store = useStore()

const incrementAction = () => {
    store.dispatch('home/incrementAction')
}

const incrementRootAction = () => {
    store.dispatch('home/incrementRootAction')
}
</script>