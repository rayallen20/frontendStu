<template>
    <div class="app">
        App组件
        <ReadOnlyApi></ReadOnlyApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        ReadOnlyApi: defineAsyncComponent(() => import('@/components/ReadonlyApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>