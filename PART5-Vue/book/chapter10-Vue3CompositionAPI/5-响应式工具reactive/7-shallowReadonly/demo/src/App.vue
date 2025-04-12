<template>
    <div class="app">
        App组件
        <ShallowReadonlyApi></ShallowReadonlyApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        ShallowReadonlyApi: defineAsyncComponent(() => import('@/components/ShallowReadonlyApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>