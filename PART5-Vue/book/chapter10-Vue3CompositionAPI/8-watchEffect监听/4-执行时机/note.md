# 4-执行时机

- 使用Composition API获取元素或组件的对象:定义一个`ref`对象,再将该对象绑定到元素或组件的`ref`属性上即可
  - step1. 定义一个`ref`对象,该对象用于存储DOM元素
  - step2. 返回该`ref`对象,供模板使用
  - step3. 元素挂载完成后,会自动赋值到`ref`对象的`value`属性值上

```vue
<template>
    <div class="watch-effect-api">
        <!-- step3. 元素挂载完成后 会自动赋值到ref对象的value属性值上 -->
        <h4 ref="titleRef">标题内容</h4>
    </div>
</template>

<script>
import {ref, watchEffect} from "vue";

export default {
    name: 'WatchEffectApiFlush',
    setup() {
        // step1. 定义一个ref对象 该对象用于存储DOM元素
        const titleRef = ref(null)

        watchEffect(() => {
            console.log(titleRef.value)
        })

        return {
            // step2. 返回该ref对象 供模板使用
            titleRef
        }
    },
}
</script>
```

- 此时控制台打印内容为:

```
null
<h4>标题内容</h4>
```

- 此时`watchEffect()`函数的第2个参数的作用就体现出来了:
  - `{flush: 'pre'}`: 控制`watchEffect()`函数的副作用函数在DOM挂载或更新前执行(默认值)
  - `{flush: 'post'}`: 控制`watchEffect()`函数在的副作用函数DOM挂载或更新后执行
    - 在Vue3.2+中,`watchEffect(()=>{}, {flush: 'post'})`等价于`watchPostEffect(() => {})`
  - `{flush: 'sync'}`: 控制`watchEffect()`函数的副作用函数在DOM挂载或更新时同步执行
    - 在Vue3.2+中,`watchEffect(()=>{}, {flush: 'sync'})`等价于`watchSyncEffect(() => {})`
    - 注意: 同步监听器不会进行批处理,每当检测到响应式数据发生变化时就会触发.可以使用它来监视简单的布尔值,但应避免在可能多次同步修改的数据源(如数组)上使用

```vue
<template>
    <div class="watch-effect-api">
        <!-- step3. 元素挂载完成后 会自动赋值到ref对象的value属性值上 -->
        <h4 ref="titleRef">标题内容</h4>
    </div>
</template>

<script>
import {ref, watchPostEffect} from "vue";

export default {
    name: 'WatchEffectApiFlush',
    setup() {
        // step1. 定义一个ref对象 该对象用于存储DOM元素
        const titleRef = ref(null)

        // 当DOM更新完成后执行副作用函数
        watchPostEffect(() => {
            console.log(titleRef.value)
        })

        return {
            // step2. 返回该ref对象 供模板使用
            titleRef
        }
    },
}
</script>
```