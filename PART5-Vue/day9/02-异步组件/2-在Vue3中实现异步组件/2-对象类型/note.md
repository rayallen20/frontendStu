# 2-对象类型

- `App.vue`:

```vue
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
```

- 注意:在`onError()`函数中,`retry()`和`fail()`就像Promise的`resolve()`和`reject()`函数一样,必须调用其中一个,才能继续错误处理

```
npm run build
...
  File                                 Size                                                                                           Gzipped

  dist/js/chunk-vendors.b39c347a.js    95.00 KiB                                                                                      34.95 KiB
  dist/js/app.f0d1c938.js              5.13 KiB                                                                                       2.30 KiB
  dist/js/522.36bb2653.js              0.51 KiB                                                                                       0.38 KiB
  dist/css/app.8c31ccb2.css            0.08 KiB                                                                                       0.09 KiB
  dist/css/522.effbc0a2.css            0.06 KiB                                                                                       0.08 KiB
...
```