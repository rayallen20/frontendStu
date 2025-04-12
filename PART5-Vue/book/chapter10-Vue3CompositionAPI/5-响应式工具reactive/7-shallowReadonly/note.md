# 7-shallowReadonly

- `shallowReadonly()`: 创建一个浅层只读代理对象,该对象只有根级别的属性变为只读,深层嵌套的属性仍然可读可写

- `components/ShallowReadonlyApi.vue`:

```vue
<template>
    <div class="readonly-api">
        <h4>根级别属性: {{state.counter}}</h4>
        <h4>嵌套属性: {{state.deep.counter}}</h4>

        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {isReactive, shallowReadonly} from "vue"

export default {
    name: "ShallowReadonlyApi",
    setup() {
        const state = shallowReadonly({
            counter: 1,
            deep: {
                counter: 5.
            }
        })

        console.log(isReactive(state.deep))

        const increment = () => {
            state.counter++
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
        <ShallowReadonlyApi></ShallowReadonlyApi>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue"

export default {
    name: 'App',
    components: {
        ShallowReadonlyApi: defineAsyncComponent(() => import('@/components/ShallowReadonlyApi.vue'))
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