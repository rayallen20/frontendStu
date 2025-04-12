# 1-readonly

- 功能: 使对象只读
- 使用场景: 向其他组件传递数据时,希望其他组件在使用该数据时不能修改
- `readonly()`函数: 返回原生对象的只读代理对象.该只读代理对象的`setter()`方法被劫持了,不允许对其进行修改
- `readonly()`函数可接收的参数类型:
  - 普通对象
  - `ref`对象
  - `reactive`对象
- 注意: 
  - `readonly()`函数返回的对象是不允许被修改的
  - 但是,`readonly()`函数的实参是允许被修改的,当这个实参被修改时,`readonly()`函数返回的对象也会被修改
  - **`readonly()`函数的本质是返回的代理对象的`setter()`方法被劫持了,不允许对其进行修改**

- `components/Readonly.vue`:

```vue
<template>
    <div class="readonly-api">
        <button @click="updateState">修改readonly数据</button>
    </div>
</template>

<script>
import {reactive, readonly, ref} from "vue";

export default {
    name: "ReadonlyApi",
    setup() {
        const info1 = {name: 'why'}
        const readonlyInfo1 = readonly(info1)

        const info2 = reactive({name: 'why'})
        const readonlyInfo2 = readonly(info2)

        const info3 = ref('why')
        const readonlyInfo3 = readonly(info3)

        const updateState = () => {
            readonlyInfo1.name = 'coderWhy' // reactivity.esm-bundler.js:101 [Vue warn] Set operation on key "name" failed: target is readonly.
            info1.name = 'coderWhy'
            console.log(readonlyInfo1)      // 修改原始对象的值,readonly()函数返回的对象也会跟着变化

            readonlyInfo2.name = 'coderWhy' // reactivity.esm-bundler.js:101 [Vue warn] Set operation on key "name" failed: target is readonly.
            info2.name = 'coderWhy'
            console.log(readonlyInfo2)      // 修改原始对象的值,readonly()函数返回的对象也会跟着变化

            readonlyInfo3.value = 'coderWhy' // [Vue warn] Set operation on key "value" failed: target is readonly
            info3.value = 'coderWhy'         // 修改原始对象的值,readonly()函数返回的对象也会跟着变化
            console.log(readonlyInfo3)
        }

        return {
            updateState
        }
    },
}
</script>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        App组件
        <ReadOnlyApi></ReadOnlyApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        ReadOnlyApi: defineAsyncComponent(() => import('@/components/ReadonlyApi.vue'))
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>
```