<template>
    <div class="app">
        App组件
        <UnRefApi></UnRefApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        UnRefApi: defineAsyncComponent(() => import('@/components/UnRefApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>