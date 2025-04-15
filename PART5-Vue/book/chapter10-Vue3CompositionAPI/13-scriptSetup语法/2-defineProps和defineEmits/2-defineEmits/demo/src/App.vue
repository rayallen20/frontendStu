<template>
    <div class="app">
        App组件
        <p>当前计数：{{ counter }}</p>
        <DefineEmitsApi @increment="incrementCounter"></DefineEmitsApi>
    </div>
</template>

<script setup>
import DefineEmitsApi from "@/components/DefineEmitsApi.vue";
import {ref} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'App'
})

const counter = ref(0)
const incrementCounter = (num) => {
    counter.value = counter.value + num
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>