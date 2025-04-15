<template>
    <div class="app">
        App组件
        <DefinePropsApi :message="message"></DefinePropsApi>
    </div>
</template>

<script setup>
import DefinePropsApi from "@/components/DefinePropsApi.vue";
import {ref} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'App'
})

const message = ref('App组件传递给DefinePropsApi组件的message属性')
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>