<template>
    <div class="app">
        App组件
        <ComputedApi></ComputedApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        ComputedApi: defineAsyncComponent(() => import('@/components/ComputedApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>