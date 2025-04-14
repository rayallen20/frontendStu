<template>
    <div class="app">
        App组件
        <WatchApi></WatchApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        WatchApi: defineAsyncComponent(() => import('@/components/WatchApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>