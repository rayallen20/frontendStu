# 2-vuex的基本使用

## step1. 安装vuex库

`npm install vuex`

## step2. 创建Store

- `src/store/index.js`

```javascript
import {createStore} from "vuex"

// createStore: 创建一个新的Vuex store实例
// 参数: 一个对象,包含store的状态、getter、mutation、action等
// 这里只需要知道state()用于定义全局的状态数据即可
const store = createStore({
    state() {
        return {
            counter: 0,
        }
    },
})

export default store
```

## step3. 将Vuex插件安装到vue实例中

- `src/main.js`:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store"

const app = createApp(App)

// 安装vuex插件
app.use(store)
app.mount('#app')
```

## step4. 在组件中使用store

- `src/App.vue`:

```vue
<template>
    <div class="app">
        当前计数: {{ $store.state.counter }}
    </div>
</template>
```

- 这里的`$store`就是在`main.js`中安装的Vuex插件

## step5. 修改store中的数据

- 修改`store`中的数据必须在`mutations`中进行

- `src/store/index.js`:

```javascript
import {createStore} from "vuex"

// createStore: 创建一个新的Vuex store实例
// 参数: 一个对象,包含store的状态、getter、mutation、action等
// 这里只需要知道state()用于定义全局的状态数据即可
const store = createStore({
    state() {
        return {
            counter: 0,
        }
    },
    // 在mutations中修改全局状态
    mutations: {
        // 这里的state形参是state()函数返回的对象
        increment(state) {
            state.counter += 1
        },
        decrement(state) {
            state.counter -= 1
        }
    },
})

export default store
```

- `src/App.vue`:

```vue
<template>
    <div class="app">
        当前计数: {{ $store.state.counter }}
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
import {useStore} from "vuex";

export default {
    name: 'App',
    methods: {
        increment() {
            // Options API语法触发调用mutations的方法
            this.$store.commit('increment')
        }
    },
    setup() {
        // Composition API语法触发调用mutations的方法
        // setup()函数中不能使用this 需要使用useStore()函数获取全局的store对象
        const store = useStore()
        const decrement = () => {
            store.commit('decrement')
        }

        return {
            decrement,
        }
    }
}
</script>
```