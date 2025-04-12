<template>
    <div class="app">
        App组件
        <ToRawApi></ToRawApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        ToRawApi: defineAsyncComponent(() => import('@/components/ToRawApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>