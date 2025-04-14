# 4-unRef

- `unRef()`函数: 若参数是ref类型,则返回内部值,否则返回参数本身
  - 本质上是`isRef(val) ? val.value : val`的语法糖

```vue
<template>
    <div class="to-refs-api">
        UnRefApi组件
    </div>
</template>

<script>

import {reactive, ref, unref} from "vue";

export default {
    name: "UnRefApi",
    setup() {
        const name = ref('why')
        const unwrappedName = unref(name)
        console.log(unwrappedName)      // 打印的是字符串why 而非响应式对象

        const info = reactive({name: 'why'})
        const unwrappedInfo = unref(info)
        console.log(unwrappedInfo)      // 打印的是响应式对象
    },
}
</script>
```