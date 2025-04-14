<template>
    <div class="app">
        App组件
        <ShallowRefApi></ShallowRefApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        ShallowRefApi: defineAsyncComponent(() => import('@/components/ShallowRefApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>