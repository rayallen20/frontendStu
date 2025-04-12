<template>
    <div class="app">
        App组件
        <ReactiveApi></ReactiveApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        ReactiveApi: defineAsyncComponent( () => import('@/components/ReactiveApi.vue')),
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>