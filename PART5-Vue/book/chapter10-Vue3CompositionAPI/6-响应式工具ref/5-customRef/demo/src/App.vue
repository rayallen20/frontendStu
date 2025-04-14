<template>
    <div class="app">
        App组件
        <CustomRefApi></CustomRefApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        CustomRefApi: defineAsyncComponent(() => import('@/components/CustomRefApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>