# 3-Provide函数

- 需求: 在父组件的`provide`属性中,为后代组件提供data中定义的响应式数据

- `App.vue`:

```vue
<template>
    <div class="app">
        App
        <Home></Home>
    </div>
</template>

<script>
import Home from "./components/Home.vue"
export default {
    name: 'App',
    data() {
        return {
            friends: ['lisi', 'wangWu']
        }
    },
    components: {
        Home
    },
    provide: {
        name: 'zhangSan',
        age: 18,
        friends: this.friends
    }
}
</script>
```

- 浏览器控制台报错: `Cannot read properties of undefined (reading 'friends')`
- 原因: 在ES6模块中,顶层的this指向undefined
- 解决办法: 如果要访问data中的响应式数据,可以将provide属性定义为一个函数,并在函数中返回一个对象

- `App.vue`:

```vue
<template>
    <div class="app">
        App
        <Home></Home>
    </div>
</template>

<script>
import Home from "./components/Home.vue"
export default {
    name: 'App',
    data() {
        return {
            friends: ['lisi', 'wangWu']
        }
    },
    components: {
        Home
    },
    provide() {
        return {
            name: 'zhangSan',
            age: 18,
            friends: this.friends
        }
    },
}
</script>
```