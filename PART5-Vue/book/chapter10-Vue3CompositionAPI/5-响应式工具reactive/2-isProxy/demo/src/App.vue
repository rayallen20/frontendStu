<template>
    <div class="app">
        App组件
        <IsProxyApi></IsProxyApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        IsProxyApi: defineAsyncComponent(() => import('@/components/IsProxyApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>