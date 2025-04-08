# 1-$refs

- Vue3不推荐直接进行DOM操作
- `ref`属性: 注册元素或子组件的引用,该引用最终会被注册在组件的`this.$refs`对象中
- `this.$refs`对象: 包含了所有注册了`ref`属性的元素或子组件实例的引用

- 子组件`NavBar.vue`:

```vue
<template>
    <div class="nav-bar">
        <h4>NavBar</h4>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            message: '我是NavBar组件中的message变量'
        }
    },
    methods: {
        sayHello() {
            console.log('sayHello:Hello NavBar')
        }
    }
}
</script>

<style scoped>
.nav-bar{
    border: 1px solid #999;
    margin: 8px 0;
}
button{
    margin: 5px;
}
</style>
```

- 父组件`App.vue`:

```vue
<template>
    <div class="app">
        <!--1. 在h4上通过ref属性注册一个模板引用-->
        <h4 ref="title">App中的h4元素</h4>
        <!--2. 在NavBar组件上通过ref属性注册一个模板引用-->
        <NavBar ref="navBar"></NavBar>

        <button @click="btnClick">获取h4对象和NavBar组件实例</button>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
    name: "App",
    components: {
        NavBar,
    },
    data() {
        return {
            names: [
                'coder',
                'why',
            ],
        }
    },
    methods: {
        btnClick() {
            // 访问已注册的模板引用
            console.log('h4元素对象:', this.$refs.title)
            console.log('NavBar组件实例:', this.$refs.navBar)

            // 访问NavBar组件实例中的数据和方法
            console.log('NavBar组件中的message:', this.$refs.navBar.message)
            this.$refs.navBar.sayHello()

            // 获取组件实例的DOM元素
            console.log(this.$refs.navBar.$el)
        }
    }
}
</script>


<style scoped>
.app{
    border: 1px solid #999;
    margin: 5px;
    padding: 8px;
}

</style>
```

控制台打印:

```
h4元素对象: <h4>App中的h4元素</h4>
NavBar组件实例: Proxy(Object) {sayHello: ƒ, …}...
我是NavBar组件中的message变量
sayHello:Hello NavBar
<div data-v-4295d220 class="nav-bar">
    <h4 data-v-4295d220>NavBar</h4>
</div>
```

- 注意事项:

1. 有多个同名`ref`属性的模板引用时,`this.$refs`中会保存最后一个模板引用
2. 若多个同名`ref`属性的模板引用是通过`v-for`渲染的,则`this.$refs`中会保存一个数组,数组中包含所有同名模板引用