<template>
    <div class="app">
        App组件
        <WatchApiDeep></WatchApiDeep>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        WatchApiDeep: defineAsyncComponent(() => import('@/components/WatchApiDeep.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>