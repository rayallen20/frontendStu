<template>
    <div class="app">
        App组件
        <SetupReturn></SetupReturn>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        SetupReturn: defineAsyncComponent( () => import('@/components/SetupReturn.vue')),
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>