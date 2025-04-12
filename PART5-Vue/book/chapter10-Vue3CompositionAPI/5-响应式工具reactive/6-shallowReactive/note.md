# 6-shallowReactive

- `shallowReactive()`函数: 创建一个浅层响应式代理对象.该对象只有根级别的属性是响应式的,而该对象深层嵌套的属性依然是普通对象

- `components/ShallowReactiveApi.vue`:

```vue
<template>
    <div class="readonly-api">
        <h4>根级别属性: {{state.counter}}</h4>
        <h4>嵌套属性: {{state.deep.counter}}</h4>

        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {isReactive, shallowReactive} from "vue"

export default {
    name: "ShallowReactiveApi",
    setup() {
        const state = shallowReactive({
            counter: 1,
            deep: {
                counter: 5.
            }
        })

        console.log(isReactive(state.deep))

        const increment = () => {
            // 注意: 此处不能修改state对象的根级别属性,否则会触发响应式更新,导致这个非响应式属性也随之更新
            state.deep.counter++
            console.log(state.deep.counter)
        }

        return {
            state,
            increment,
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
        <ShallowReactiveApi></ShallowReactiveApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        ShallowReactiveApi: defineAsyncComponent(() => import('@/components/ShallowReactiveApi.vue'))
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