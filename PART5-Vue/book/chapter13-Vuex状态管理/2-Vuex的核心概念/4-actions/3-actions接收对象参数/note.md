# 3-actions接收对象参数

- 和`mutations`相同,分发`action`时,可以传入一个对象作为参数

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

- `src/components/UseActions.vue`:

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

const incrementBy = () => {
    const callObj = {
        // action的类型
        type: 'incrementByAction',
        // 以下属性均作为payload的属性传递
        num: num.value,
    }
    store.dispatch(callObj)
}
</script>
```