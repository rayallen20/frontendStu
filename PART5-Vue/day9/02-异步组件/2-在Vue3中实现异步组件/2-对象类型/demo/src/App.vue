<template>
    <div class="app">
        App组件
        <HomeCpn></HomeCpn>
        <AsyncCategory></AsyncCategory>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"
import HomeCpn from "@/components/HomeCpn.vue"

const AsyncCategory = defineAsyncComponent({
    // 1. 需要异步加载的组件
    loader: () => import('@/components/AsyncCategory.vue'),
    // 2. 加载时显示的组件 (这里假设有一个名为 Loading.vue 的组件)
    // loadingComponent: Loading,
    // 3. 加载失败时显示的组件 (这里假设有一个名为 Error.vue 的组件)
    // errorComponent: Error,
    // 4. 延迟加载的时间(ms) 即:超过这个时长后才会显示 loadingComponent
    delay: 200,
    // 5. 加载时长阈值(ms) 即:超过这个时长后会显示 errorComponent 默认值:Infinity
    timeout: 3000,
    // 6. 定义组件是否可挂起(默认为true)
    suspensible: false,
    // 7. 组件加载失败的回调函数
    // error: 错误对象
    // retry: 重试函数.当promise的状态为rejected时,调用该函数可以重新加载组件
    // fail: 失败函数.当promise的状态为rejected时,调用该函数可以停止加载组件
    // attempts: 重试次数
    onError: function (error, retry, fail, attempts) {
        if (error.message.match(/fetch/) && attempts <= 3) {
            retry()
        } else {
            fail()
        }
    }
})

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