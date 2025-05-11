# 2-modules的局部状态

- 子模块有自己的`state`/`getters`/`mutations`/`actions`/`modules`(子模块中的`modules`相当于嵌套的子模块),子模块的特点如下:
  - 子模块定义的`state`属于子模块的状态,称为局部状态
  - 子模块内,`mutation`和`getter`函数接收的第1个形参`state`是局部状态
  - 子模块内,`action`函数访问局部状态通过`context.state`访问;访问根模块状态通过`context.rootState`访问
  - 子模块内,`getter`函数的第3个形参为`rootState`,表示根模块的状态

- `src/store/modules/user.js`:

```javascript
const userModule = {
    state() {
        return {
            userCounter: 1000,
        }
    },
    getters: {
        // 子模块内的getter函数的形参state是该模块的局部状态
        doubleUserCounter(state) {
            return state.userCounter * 2
        },
        // 子模块内的getter函数的第3个形参表示根模块的状态
        doubleUserCounterAddRootCounter(_state, getters, rootState) {
            return getters.doubleUserCounter + rootState.counter
        }
    },
    mutations: {},
    actions: {
        incrementAction(context) {
            // 在子模块的action函数中 通过context.state访问局部状态
            console.log(context.state.userCounter)
            // 在子模块的action函数中 通过context.rootState访问根模块的状态
            console.log(context.rootState.counter)

            context.commit('increment')
        }
    },
}

export default userModule
```

- 注: 在子模块的`mutation`函数中,是无法像`action`一样,访问到根模块的状态的
- 如果有这种需求,只能通过`action`函数来实现,在`action`函数中访问根模块的状态,然后通过`commit`触发子模块的`mutation`函数,在`commit`时传递根模块的状态

```javascript
actions: {
  someAction({ commit, rootState }) {
    const rootData = rootState.someRootData
    commit('SOME_MUTATION', rootData)
  }
}
```

- 这是因为vuex的设计理念中:
  - `mutation`应该是纯粹的,只关注修改自身`state`的函数
  - 如果需要跨模块访问数据,应该通过`action`来处理
  - 这有助于保持状态变更的可预测性和可追踪性

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
        <!-- 访问store的home模块的getter -->
        <h4>user getter: doubleUserCounter: {{$store.getters['doubleUserCounter']}}</h4>
        <h4>user getter: doubleUserCounterAddRootCounter: {{$store.getters['doubleUserCounterAddRootCounter']}}</h4>
        <!-- 触发action -->
        <button @click="incrementAction">+1</button>
    </div>
</template>

<script setup>
import {useStore} from "vuex"

// eslint-disable-next-line
defineOptions({
    name: 'UseModules'
})

const store = useStore()

const incrementAction = () => {
    // 此时由于子模块和根模块都有名为incrementAction的action函数 因此都会被触发
    store.dispatch('incrementAction')
}
</script>
```