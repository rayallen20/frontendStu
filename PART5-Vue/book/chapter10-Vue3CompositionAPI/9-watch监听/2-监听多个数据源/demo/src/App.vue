<template>
    <div class="app">
        App组件
        <WatchApiMulti></WatchApiMulti>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        WatchApiMulti: defineAsyncComponent(() => import('@/components/WatchApiMulti.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>