# 1-工厂函数

- `HomeCpn.vue`: 普通组件

```vue
<template>
    <div class="home-cpn">
        HomeCpn组件
    </div>
</template>

<script>
export default {
    name: 'HomeCpn',
}
</script>

<style scoped>
.home-cpn{
    border: 1px solid #999;
    margin: 5px;
}
</style>
```

- `AsyncCategory.vue`: 异步组件

```vue
<template>
    <div class="async-category">
        <h4>{{message}}</h4>
    </div>
</template>

<script>
export default {
    name: "AsyncCategory",
    data() {
        return {
            message: 'AsyncCategory异步组件',
        }
    }
}
</script>

<style scoped>
.async-category{
    border: 1px solid #999;
    margin: 5px;
}
</style>
```

- `App.vue`: 主组件

```vue
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
```

```
npm run build
...
  File                                 Size                                                                                           Gzipped

  dist/js/chunk-vendors.b39c347a.js    95.00 KiB                                                                                      34.95 KiB
  dist/js/app.d1bd303a.js              5.02 KiB                                                                                       2.24 KiB
  dist/js/522.36bb2653.js              0.51 KiB                                                                                       0.38 KiB
  dist/css/app.34510a1d.css            0.08 KiB                                                                                       0.09 KiB
  dist/css/522.effbc0a2.css            0.06 KiB                                                                                       0.08 KiB
...
```

```
tree ./dist/js
./dist/js
├── 522.36bb2653.js
├── 522.36bb2653.js.map
├── app.d1bd303a.js
├── app.d1bd303a.js.map
├── chunk-vendors.b39c347a.js
└── chunk-vendors.b39c347a.js.map

0 directories, 6 files
```

- `chunk-vendors.b39c347a.js`是分包后的公共代码(也就是依赖)
- `app.d1bd303a.js`是主包代码
- `522.36bb2653.js`是异步加载的组件代码(也就是`AsyncCategory.vue`的代码)