# 1-提供数据

- `provide()`函数: 用于向子组件或孙组件提供数据
  - `key`: 提供数据的键
  - `value`: 提供的数据

```vue
<template>
    <div class="app">
        App组件
        <div>{{name}}-{{age}}</div>
        <div>{{counter}}</div>
        <button @click="increment">App组件+1</button>
    </div>
</template>

<script>
import {provide, ref} from "vue";

export default {
    name: 'App',
    setup() {
        // 普通数据
        const name = 'coderWhy'
        const age = 18
        
        // 响应式数据
        let counter = ref(100)
        
        // 向子组件或孙组件提供数据
        provide('name', name)           // 提供普通数据
        provide('age', age)
        provide('counter', counter)     // 提供响应式数据
        
        const increment = () => counter.value++
        
        return {
            name,
            age,
            counter,
            increment
        }
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