# 2-mutations接收参数

- 在`mutations`中定义的`mutation`函数,可以接收2个参数:
  - `state`对象: 当前的`state`对象
  - `payload`对象: 传递给`mutation`函数的参数

- `src/store/index.js`:

```javascript
import {createStore} from "vuex"

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
        incrementBy(state, payload) {
            state.counter += payload.num
        }
    }
})

export default store
```

- `src/components/UseMutations.vue`:

```vue
<template>
    <div class="use-mutations">
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
    name: 'UseMutations'
})

const store = useStore()

const increment = () => {
    store.commit('increment')
}

const decrement = () => {
    store.commit('decrement')
}

const num = ref(0)

const incrementBy = () => {
    const payload = {
        num: num.value,
    }
    store.commit('incrementBy', payload)
}
</script>
```

- `payload`也可以是其他类型(例如`Number`)