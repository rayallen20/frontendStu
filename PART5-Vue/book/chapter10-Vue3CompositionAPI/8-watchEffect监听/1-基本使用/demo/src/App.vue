<template>
    <div class="app">
        App组件
        <WatchEffectApi></WatchEffectApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        WatchEffectApi: defineAsyncComponent(() => import('@/components/WatchEffectApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>