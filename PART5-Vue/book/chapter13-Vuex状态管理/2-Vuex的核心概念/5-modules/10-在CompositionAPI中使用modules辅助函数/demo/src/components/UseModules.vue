<template>
    <div class="use-modules">
        <h4>homeCounter: {{homeCounter}}</h4>
        <h4>doubleHomeCounter: {{doubleHomeCounter}}</h4>
        <button @click="increment">+1</button>
        <button @click="incrementAction">+1</button>
    </div>
</template>

<script setup>
import {createNamespacedHelpers} from "vuex"
import {useActions, useGetters, useMutations, useState} from "@/hooks"

// eslint-disable-next-line
defineOptions({
    name: 'UseModules'
})

const homeLib = createNamespacedHelpers('home')
const {homeCounter} = useState(homeLib.mapState, ['homeCounter'])
const {doubleHomeCounter} = useGetters(homeLib.mapGetters, ['doubleHomeCounter'])
const {increment} = useMutations(homeLib.mapMutations, ['increment'], 'home')
const {incrementAction} = useActions(homeLib.mapActions, ['incrementAction'], 'home')
</script>