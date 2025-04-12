# 2-ref

- `reactive()`函数对入参数据的类型要求为对象或数组.为了解决这个问题,需要使用`ref()`函数
- `ref()`函数:
  - 该函数接收一个值,返回一个响应式/可更改的`ref`对象,该对象内部只有1个名为`value`的属性,该属性指向内部值(即传入的值)
  - `ref`对象内部值是通过该对象的`value`属性维护的,要修改该值,需要通过`value`属性来修改
  - 若传入一个引用类型的值,则该值会被`reactive()`函数处理,并返回一个`ref`对象,该对象的`value`属性指向该值

- `components/RefApi.vue`:

```vue
<template>
    <div class="setup-return">
        <h4>当前计数: {{counter}}</h4>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {ref} from "vue"

export default {
    setup() {
        const counter = ref(100)

        const increment = () => {
            counter.value++
            console.log(counter.value)
        }

        return {
            counter,
            increment
        }
    }
}
</script>
```

- 注意: 在模板中使用`ref`对象时,会自动解包,不需要写成`counter.value`;但是在`setup()`函数中使用时,则不会自动解包,需要写成`counter.value`

- `App.vue`:

```vue
<template>
    <div class="app">
        App组件
        <RefApi></RefApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        RefApi: defineAsyncComponent( () => import('@/components/RefApi.vue')),
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

- 注意:
  - 若普通对象中包含`ref`对象,则在模板中引用该普通对象中的`ref`对象时,会自动解包
  - 若`reactive`对象中包含`ref`对象,则在模板中引用该`reactive`对象中的`ref`对象时,会自动解包

- `components/RefApiOther.vue`:

```vue
<template>
    <div class="setup-return">
        <h4>当前计数: {{counter}}</h4>

        <!-- 普通对象中的ref对象可以自动解包 -->
        <h3>当前计数(普通对象info): {{info.counter}}</h3>

        <!-- reactive对象中的ref对象可以自动解包 -->
        <h3>当前计数(reactive对象reactiveInfo): {{reactiveInfo.counter}}</h3>

        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {reactive, ref} from "vue"

export default {
    name: "RefApiOther",
    setup() {
        let counter = ref(100)

        const info = {
            counter,
        }

        const reactiveInfo = reactive({
            counter,
        })

        const increment = () => {
            counter.value++
            console.log(counter.value)
        }

        return {
            counter,
            info,
            reactiveInfo,
            increment
        }
    }
}
</script>
```
