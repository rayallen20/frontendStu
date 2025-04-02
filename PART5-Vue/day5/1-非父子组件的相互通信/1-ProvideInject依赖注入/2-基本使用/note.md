# 2-基本使用

- Provide/Inject是Vue提供的一个API,用于在组件树中跨级传递数据

![provide-inject](../../img/provide-inject.png)

- 例:
    - 父组件: App.vue
    - 子组件: Home.vue
    - 孙子组件: HomeContent.vue

- `HomeContent.vue`:

```vue
<template>
    <div class="home-content">
        HomeContent
        <p>{{name}} - {{age}} - {{friends}}</p>
    </div>
</template>

<script>
    export default {
        name: 'HomeContent',
        // 孙子组件使用inject注入祖代组件提供的值
        inject: ['name', 'age', 'friends'],
    }
</script>
```

- `Home.vue`:

```vue
<template>
    <div class="home">
        Home
        <HomeContent></HomeContent>
    </div>
</template>

<script>
import HomeContent from "./HomeContent.vue"

export default {
    components: {
        HomeContent
    }
}
</script>
```

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
    components: {
        Home
    },
    // 祖代组件使用provide属性为后代组件提供值
    provide: {
        name: 'zhangSan',
        age: 18,
        friends: ['lisi', 'wangWu']
    }
}
</script>
```