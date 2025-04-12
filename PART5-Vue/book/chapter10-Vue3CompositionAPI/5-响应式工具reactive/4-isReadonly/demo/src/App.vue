<template>
    <div class="app">
        App组件
        <IsReadonly></IsReadonly>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        IsReadonly: defineAsyncComponent(() => import('@/components/IsReadonly.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>