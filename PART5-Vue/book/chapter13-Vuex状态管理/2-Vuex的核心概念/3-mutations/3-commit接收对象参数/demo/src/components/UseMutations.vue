<template>
    <div class="use-mutations">
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
    name: 'UseMutations'
})

const store = useStore()

const increment = () => {
    store.commit('increment')
}

const decrement = () => {
    store.commit('decrement')
}

const num = ref(0)

const incrementBy = () => {
    const callObj = {
        // 事件类型
        type: 'incrementBy',
        // 事件参数 以下属性均作为payload的属性传递
        num: num.value,
    }
    store.commit(callObj)
}
</script>