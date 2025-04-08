<template>
    <div class="app">
        App组件
        <HomeCpn></HomeCpn>
        <suspense>
            <template #default>
                <AsyncCategory></AsyncCategory>
            </template>

            <template #fallback>
                <LoadingCpn></LoadingCpn>
            </template>
        </suspense>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"
import HomeCpn from "@/components/HomeCpn.vue"
import LoadingCpn from "@/components/LoadingCpn.vue";

const AsyncCategory = defineAsyncComponent(() => import('@/components/AsyncCategory.vue'))

export default {
    name: 'App',
    components: {
        LoadingCpn,
        HomeCpn,
        AsyncCategory
    }
}
</script>

<style scoped>
.app{
    border: 1px solid #999;
    margin: 5px;
}
</style>