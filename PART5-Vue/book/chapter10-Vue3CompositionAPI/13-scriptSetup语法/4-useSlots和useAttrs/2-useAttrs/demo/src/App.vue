<template>
    <div class="app">
        App组件
        <UseAttrApi message="App传递的message" foo="fooAttr" bar="barContent"></UseAttrApi>
    </div>
</template>

<script setup>
import UseAttrApi from "@/components/UseAttrApi.vue";
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>