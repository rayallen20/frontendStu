# 5-命名空间模块中跨模块分发action

- 本质上还是通过子模块访问根模块的方式,跨模块分发action
- `dispatch('moduleName/actionName', payload, { root: true })`

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
            // home模块中 跨模块调用user模块中的action
            context.dispatch('user/incrementAction', null, {root: true})
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
            // user模块中 跨模块调用home模块中的action
            context.dispatch('home/incrementAction', null, { root: true })
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