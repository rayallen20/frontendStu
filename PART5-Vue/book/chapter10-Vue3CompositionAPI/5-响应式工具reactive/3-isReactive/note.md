# 3-isReactive

- `isReactive()`函数:检查一个对象是否是由`reactive()`/`shallowReactive()`创建
- 注意: 若对象由`readonly()`函数创建,且参数为`reactive()`函数创建的对象,则该方法也会返回`true`

```vue
<template>
    <div class="readonly-api">
    </div>
</template>

<script>
import {isProxy, isReactive, reactive, readonly} from "vue"

export default {
    name: "IsReactiveApi",
    setup() {
        const state = reactive({
            name: 'Kobe',
        })
        console.log(isProxy(state))
        console.log(isReactive(state))

        const readonlyState = readonly(state)
        console.log(isProxy(readonlyState))
        console.log(isReactive(readonlyState))      // 若readonly()创建的对象时,使用的是reactive()创建的对象,则isReactive()返回true
    },
}
</script>
```