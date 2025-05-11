# 1-基本使用

- `src/store/index.js`:

```javascript
import {createStore} from "vuex"
import {INCREMENT_BY} from "@/store/mutationTypes"

const store = createStore({
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
        incrementAction(context) {      // context: 是一个与store实例有相同方法和属性的上下文对象
            // 使用setTimeout模拟异步操作
            setTimeout(() => {
                context.commit('increment')
            }, 1500)
        },
        decrementAction(context) {
            // 解构context对象
            let {commit} = context
            commit('decrement')
        }
    }
})

export default store
```

- `actions`中的参数和`mutations`不同,不再是`state`,而是一个和`state`实例有相同方法和属性的`context`对象
- 这样设计与`modules`有关,后续会讲到

- `src/components/UseActions.vue`:

```vue
<template>
    <div class="use-mutations">
        <h4>当前计数: {{$store.state.counter}}</h4>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script setup>
    import {useStore} from "vuex"

    // eslint-disable-next-line
    defineOptions({
        name: 'UseActions'
    })

    const store = useStore()

    // 分发action
    const increment = () => store.dispatch('incrementAction')

    const decrement = () => store.dispatch('decrementAction')
</script>
```

- 调用`actions`中的方法和`mutations`中的方法也不同,使用`store.dispatch('actionName')`来分发`action`