# 2-注入数据

- `inject()`: 用于在子组件中接收父组件通过`provide()`提供的数据
  - `key`: 要接收的数据的键名
  - `defaultValue`: 可选参数,如果没有找到对应的键名,则使用该值

- `components/HomeCpn.vue`:

```vue
<template>
    <div class="home-cpn">
        HomeCpn组件
        <div>{{name}}-{{age}}</div>
        <div>{{counter}}</div>
        <button @click="homeIncrement">Home组件+1</button>
    </div>
</template>

<script>
import {inject} from "vue";

export default {
    name: 'HomeCpn',
    setup() {
        const name = inject('name')
        const age = inject('age')
        const counter = inject('counter')

        const homeIncrement = () => counter.value++

        return {
            name,
            age,
            counter,
            homeIncrement
        }
    },
}
</script>
```

- `components/App.vue`:

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
import {provide, ref} from "vue";
import HomeCpn from "@/components/HomeCpn.vue";

export default {
    name: 'App',
    setup() {
        const name = 'coderWhy'
        const age = 18
        const counter = ref(100)
        
        provide('name', name)
        provide('age', age)
        provide('counter', counter)

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

- 父组件提供的普通数据,在子组件中,只能读取,不能修改
- 父组件提供的响应式对象,在子组件中,可以读取和修改
  - 且该响应式对象在任意组件中修改,所有依赖该对象的组件都会更新