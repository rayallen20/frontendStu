<template>
    <div class="app">
        App组件
        <ShallowReactiveApi></ShallowReactiveApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        ShallowReactiveApi: defineAsyncComponent(() => import('@/components/ShallowReactiveApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>