# 3-提供和注入响应式数据

- `provide()`函数提供的响应式数据可以在父组件或子组件中被修改,为保证单向数据流,可以使用`readonly()`函数:

```vue
<template>
    <div class="app">
        App组件
        <div>{{name}}-{{age}}</div>
        <div>{{counter}}</div>
        <button @click="increment">App组件+1</button>

        <HomeCpn></HomeCpn>
    </div>
</template>

<script>
import {provide, readonly, ref} from "vue";
import HomeCpn from "@/components/HomeCpn.vue";

export default {
    name: 'App',
    setup() {
        const name = 'coderWhy'
        const age = 18
        const counter = ref(100)

        provide('name', name)
        provide('age', age)

        // 子组件注入时只能读 不能写
        provide('counter', readonly(counter))

        const increment = () => counter.value++

        return {
            name,
            age,
            counter,
            increment
        }
    },
    components: {
        HomeCpn,
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

- 此时,在`HomeCpn`组件中,修改`counter`时,报错:`[Vue warn] Set operation on key "value" failed: target is readonly.`