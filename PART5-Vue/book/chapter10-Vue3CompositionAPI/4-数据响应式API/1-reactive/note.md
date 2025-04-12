# 1-reactive

- `reactive()`函数:
  - 用于创建响应式对象
  - 接收一个普通对象或数组作为参数,返回一个响应式对象
  - 对于嵌套对象,`reactive()`会递归地将其转换为响应式对象
  - 适用于大多数情况,但对于某些特殊数据类型(如数组/Map/Set等),可能需要使用其他API(如`ref()`或`shallowReactive()`)

- `components/ReactiveApi.vue`:

```vue
<template>
    <div class="setup-return">
        <h4>当前计数: {{state.counter}}</h4>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {reactive} from "vue"

export default {
    setup() {
        const state = reactive({
            counter: 100
        })
        const increment = () => {
            state.counter++
            console.log(state.counter)
        }

        return {
            state,
            increment
        }
    }
}
</script>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        App组件
        <ReactiveApi></ReactiveApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        ReactiveApi: defineAsyncComponent( () => import('@/components/ReactiveApi.vue')),
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

- 其实组件的`data()`函数的返回值在Vue3内部也是交给了`reactive()`函数处理的