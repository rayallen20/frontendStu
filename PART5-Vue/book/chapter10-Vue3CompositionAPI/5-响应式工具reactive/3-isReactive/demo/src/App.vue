<template>
    <div class="app">
        App组件
        <IsReactiveApi></IsReactiveApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        IsReactiveApi: defineAsyncComponent(() => import('@/components/IsReactiveApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>