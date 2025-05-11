# 6-命名空间模块中跨模块提交mutation

- 思路和跨模块分发`action`类似,也是通过子模块访问根模块的方式,跨模块提交`mutation`
- 但是要注意,对`mutation`的跨模块提交,也是要放在本模块的`action`中做的
  - 这是因为Vuex的设计理念:
    - `mutation`应该是纯粹的,只关注修改自身`state`的函数
    - 如果需要跨模块访问数据,应该通过`action`来处理
    - 这有助于保持状态变更的可预测性和可追踪性

- `src/store/modules/home.js`:

```javascript
const homeModule = {
    namespaced: true,
    state() {
        return {
            homeCounter: 100,
        }
    },
    mutations: {
        increment(state) {
            state.homeCounter++
        },
    },
    actions: {
        incrementAction(context) {
            context.commit('increment')
        },
        incrementUserCounterAction(context) {
            // home模块中 跨模块调用user模块中的mutation
            context.commit('user/increment', null, {root: true})
        }
    },
}

export default homeModule
```

- `src/store/modules/user.js`:

```javascript
const userModule = {
    namespaced: true,
    state() {
        return {
            userCounter: 1000,
        }
    },
    mutations: {
        increment(state) {
            state.userCounter++
        },
    },
    actions: {
        incrementAction(context) {
            context.commit('increment')
        },
        incrementHomeCounterAction(context) {
            // user模块中 跨模块调用home模块中的mutation
            context.commit('home/increment', null, { root: true })
        }
    },
}

export default userModule
```

- `src/store/index.js`:

```javascript
import {createStore} from "vuex"
import homeModule from "@/store/modules/home"
import userModule from "@/store/modules/user"

const store = createStore({
    modules: {
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
        <h4>homeCounter: {{$store.state.home.homeCounter}}</h4>
        <h4>userCounter: {{$store.state.user.userCounter}}</h4>
        <button @click="incrementUserCounterAction">incrementUserCounterAction</button>
        <button @click="incrementHomeCounterAction">incrementHomeCounterAction</button>
    </div>
</template>

<script setup>
import {useStore} from "vuex"

// eslint-disable-next-line
defineOptions({
    name: 'UseModules'
})

const store = useStore()

const incrementUserCounterAction = () => {
    store.dispatch('home/incrementUserCounterAction')
}

const incrementHomeCounterAction = () => {
    store.dispatch('user/incrementHomeCounterAction')
}
</script>
```