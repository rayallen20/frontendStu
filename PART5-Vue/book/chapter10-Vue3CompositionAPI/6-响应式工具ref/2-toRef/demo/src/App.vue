<template>
    <div class="app">
        App组件
        <ToRefApi></ToRefApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        ToRefApi: defineAsyncComponent(() => import('@/components/ToRefApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>