<template>
    <div class="app">
        App组件
        <IsRefApi></IsRefApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        IsRefApi: defineAsyncComponent(() => import('@/components/IsRefApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>