<template>
    <div class="app">
        App组件
        <WatchEffectApiClear></WatchEffectApiClear>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        WatchEffectApiClear: defineAsyncComponent(() => import('@/components/WatchEffectApiClear.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>