<template>
    <div class="app">
        <h4>{{counter}}</h4>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {onMounted, onUnmounted, onUpdated, ref} from "vue";

export default {
    name: 'App',
    setup() {
        const counter = ref(0)
        const increment = () => counter.value++

        // 生命周期函数(同一个生命周期函数可以有多个)
        onMounted(() => {
            console.log('onMounted1')
        })

        onMounted(() => {
            console.log('onMounted2')
        })

        onUpdated(() => {
            console.log('onUpdated')
        })

        onUnmounted(() => {
            console.log('onUnmounted')
        })

        return {
            counter,
            increment,
        }
    },
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>