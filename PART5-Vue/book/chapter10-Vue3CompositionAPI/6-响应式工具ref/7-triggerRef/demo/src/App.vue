<template>
    <div class="app">
        App组件
        <TriggerRefApi></TriggerRefApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        TriggerRefApi: defineAsyncComponent(() => import('@/components/TriggerRefApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>