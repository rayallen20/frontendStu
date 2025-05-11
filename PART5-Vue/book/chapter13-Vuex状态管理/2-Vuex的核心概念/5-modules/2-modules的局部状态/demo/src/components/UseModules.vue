<template>
    <div class="use-modules">
        <!-- 访问store的根模块的state -->
        <h4>root state: {{$store.state.counter}}</h4>
        <!-- 访问store的home模块的state -->
        <h4>home state: {{$store.state.home.homeCounter}}</h4>
        <!-- 访问store的user模块的state -->
        <h4>user state: {{$store.state.user.userCounter}}</h4>
        <!--
            访问store的home模块的getter
            在模板中,$store.getters可以获取所有模块的getters对象
        -->
        <h4>user getter: doubleUserCounter: {{$store.getters['doubleUserCounter']}}</h4>
        <h4>user getter: doubleUserCounterAddRootCounter: {{$store.getters['doubleUserCounterAddRootCounter']}}</h4>
        <!-- 触发action -->
        <button @click="incrementAction">+1</button>
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
    // 此时由于子模块和根模块都有名为incrementAction的action函数 因此都会被触发
    store.dispatch('incrementAction')
}
</script>