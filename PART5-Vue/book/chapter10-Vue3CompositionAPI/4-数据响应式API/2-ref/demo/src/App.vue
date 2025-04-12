<template>
    <div class="app">
        App组件
        <RefApiOther></RefApiOther>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        RefApiOther: defineAsyncComponent( () => import('@/components/RefApiOther.vue')),
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>