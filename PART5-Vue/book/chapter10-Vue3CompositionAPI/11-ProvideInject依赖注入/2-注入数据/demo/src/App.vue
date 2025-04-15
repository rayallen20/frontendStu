<template>
    <div class="app">
        App组件
        <div>{{name}}-{{age}}</div>
        <div>{{counter}}</div>
        <button @click="increment">App组件+1</button>

        <HomeCpn></HomeCpn>
    </div>
</template>

<script>
import {provide, ref} from "vue";
import HomeCpn from "@/components/HomeCpn.vue";

export default {
    name: 'App',
    setup() {
        const name = 'coderWhy'
        const age = 18
        const counter = ref(100)

        provide('name', name)
        provide('age', age)
        provide('counter', counter)

        const increment = () => counter.value++

        return {
            name,
            age,
            counter,
            increment
        }
    },
    components: {
        HomeCpn,
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>