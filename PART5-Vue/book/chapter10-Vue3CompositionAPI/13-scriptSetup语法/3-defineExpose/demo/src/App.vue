<template>
    <div class="app">
        App组件
        <DefineExposeApi ref="defineExposeApi"></DefineExposeApi>
    </div>
</template>

<script setup>
import DefineExposeApi from "@/components/DefineExposeApi.vue";
import {ref, watchPostEffect} from "vue";

const defineExposeApi = ref(null)

watchPostEffect(() => {
    // 组件实例
    console.log(defineExposeApi.value)

    // 组件暴露的属性
    console.log(defineExposeApi.value.age)
    console.log(defineExposeApi.value.name)

    // 调用组件暴露的方法
    defineExposeApi.value.showMessage()
})
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>