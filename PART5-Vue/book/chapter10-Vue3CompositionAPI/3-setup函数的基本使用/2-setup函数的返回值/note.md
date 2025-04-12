# 2-setup函数的返回值

- `setup()`函数要求返回值类型为Object,该Object中的属性会被暴露到组件的模板中
- 这意味着,`setup()`函数可以代替`data()`函数

- `components/SetupReturn.vue`:

```vue
<template>
    <div class="setup-return">
        <h4>当前计数: {{counter}}</h4>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default {
    setup() {
        let counter = 100
        const increment = () => {
            counter++
            console.log(counter)
        }

        return {
            counter,
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
        <SetupReturn></SetupReturn>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    name: 'App',
    components: {
        SetupReturn: defineAsyncComponent( () => import('@/components/SetupReturn.vue')),
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

- 注意:此处由于`setup()`函数返回的`counter`是一个基本数据类型,所以在`setup()`函数中对`counter`的修改不会影响到模板中的`counter`,因为Vue3会将其视为一个常量,而不是响应式数据