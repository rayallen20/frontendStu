<template>
    <div class="app">
        <h4>{{userCounter}}</h4>
        <h4>{{double}}</h4>
        <button @click="increment">+1</button>
        <h4>{{$store.state.counter}}</h4>
        <button @click="incrementAction">Root State +1</button>
    </div>
</template>

<script setup>
import {createNamespacedHelpers} from "vuex"
import {useState} from "@/hooks/useState"
import {useGetter} from "@/hooks/useGetter"
import {useMutation} from "@/hooks/useMutation"
import {useAction} from "@/hooks/useAction"

// eslint-disable-next-line
defineOptions({
    name: 'App'
})

const userLib = createNamespacedHelpers('user')

const {userCounter} = useState(userLib.mapState, ['userCounter'])
// 重命名getter
const {double} = useGetter(userLib.mapGetters, {
    'double': 'doubleUserCounterAddRootCounter'
})
const {increment} = useMutation(userLib.mapMutations, ['increment'])
const {incrementAction} = useAction(userLib.mapActions, ['incrementAction'])
</script>

<style scoped>

</style>
