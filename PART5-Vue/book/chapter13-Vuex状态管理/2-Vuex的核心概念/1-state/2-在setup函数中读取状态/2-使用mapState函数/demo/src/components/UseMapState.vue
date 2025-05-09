<template>
    <div class="use-computed-read-store"></div>
    <h4>Home: {{$store.state.counter}}</h4>
    <h4>Home: {{storeState.counter}}</h4>
    <h4>Name: {{storeState.name}}</h4>
    <h4>Age: {{storeState.age}}</h4>
</template>

<script setup>
import {mapState, useStore} from "vuex"
import {computed} from "vue"

// eslint-disable-next-line
defineOptions({
    name: 'UseMapState',
})

const store = useStore()
const storeStateFns = mapState(
    [
        'counter',
        'name',
        'age',
    ]
)
console.log(storeStateFns)      // { counter: function, name: function, age: function }

const storeState = {}

Object.keys(storeStateFns).forEach(key => {
    // 为每个函数绑定this为{$store: store}
    const fn = storeStateFns[key].bind({$store: store})

    // 将普通函数转换为计算属性函数
    storeState[key] = computed(fn)
})

console.log(storeState)     // { counter: ComputedRefImpl, name: ComputedRefImpl, age: ComputedRefImpl }
</script>