<template>
    <div class="app">
        App组件
        <ToRefsApi></ToRefsApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        ToRefsApi: defineAsyncComponent(() => import('@/components/ToRefsApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>