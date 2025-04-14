<template>
    <div class="app">
        App组件
        <WatchEffectApiFlush></WatchEffectApiFlush>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        WatchEffectApiFlush: defineAsyncComponent(() => import('@/components/WatchEffectApiFlush.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>