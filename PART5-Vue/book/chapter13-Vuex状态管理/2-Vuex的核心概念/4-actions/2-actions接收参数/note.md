# 2-actions接收参数

- 和`mutations`类似,`actions`也可以接收2个参数:
  - `context`对象: 一个和`store`实例有相同方法和属性的对象
  - `payload`对象: 分发`action`时传入的参数

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
    }
})

export default store
```

- `src/components/Counter.vue`:

```vue
<template>
    <div class="use-actions">
        <h4>当前计数: {{$store.state.counter}}</h4>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <input type="number" v-model="num">
        <button @click="incrementBy">+{{num}}</button>
    </div>
</template>

<script setup>
import {useStore} from "vuex"
import {ref} from "vue"

// eslint-disable-next-line
defineOptions({
    name: 'UseActions'
})

const num = ref(0)

const store = useStore()

const increment = () => store.dispatch('incrementAction')

const decrement = () => store.dispatch('decrementAction')

const incrementBy = () => store.dispatch('incrementByAction', {num: num.value})
</script>
```