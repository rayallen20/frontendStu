# 1-基本使用

- 为`store`增加`home`和`user`两个子模块

- `src/store/modules/home.js`:

```javascript
const homeModule = {
    state() {
        return {
            homeCounter: 100,
        }
    },
    getters: {},
    mutations: {},
    actions: {},
}

export default homeModule
```

- `src/store/modules/user.js`:

```javascript
const userModule = {
    state() {
        return {
            userCounter: 1000,
        }
    },
    getters: {},
    mutations: {},
    actions: {},
}

export default userModule
```

- `src/store/index.js`:

```javascript
import {createStore} from "vuex"
import {INCREMENT_BY} from "@/store/mutationTypes"
import homeModule from "@/store/modules/home"
import userModule from "@/store/modules/user"

const store = createStore({
    // 根模块的state/mutations/actions/getters
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        [INCREMENT_BY](state, payload) {
            state.counter += payload.num
        },
    },
    actions: {
        incrementAction(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 1500)
        },
        decrementAction(context) {
            let {commit} = context
            commit('decrement')
        },
        incrementByAction(context, payload) {
            context.commit(INCREMENT_BY, payload)
        }
    },
    // 定义子模块
    modules: {
        // key: 指定子模块名称
        // value: 指定引入的子模块
        home: homeModule,
        user: userModule,
    }
})

export default store
```

- `src/components/UseModules.vue`:

```vue
<template>
    <div class="use-modules">
        <!-- 访问store的根模块的state -->
        <h4>root state: {{$store.state.counter}}</h4>
        <!-- 访问store的home模块的state -->
        <h4>home state: {{$store.state.home.homeCounter}}</h4>
        <!-- 访问store的user模块的state -->
        <h4>user state: {{$store.state.user.userCounter}}</h4>
    </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: 'UseModules'
})
</script>
```