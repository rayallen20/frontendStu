<template>
    <div class="app">
        App组件
        <HomeCpn></HomeCpn>
        <AsyncCategory></AsyncCategory>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

// 以普通方式导入组件 则不会做分包处理
import HomeCpn from "@/components/HomeCpn.vue"

// 使用defineAsyncComponent函数异步加载的组件 会进行分包处理
const AsyncCategory = defineAsyncComponent(() => import('./components/AsyncCategory.vue'))

export default {
    name: 'App',
    components: {
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