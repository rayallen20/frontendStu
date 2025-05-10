# 4-mutations常量类型

- 为了触发`mutations`中定义的回调函数,`store.commit()`方法中传递的事件类型的实参值,必须和被调用的`mutations`中的函数名一致,但这样很容易出错
- 为了解决这个问题,通常会将事件类型定义为常量,并将常量导出,在需要使用的地方引入

- `src/store/mutationsTypes.js`:

```javascript
export const INCREMENT_BY = 'incrementBy'
```

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
        // 在JS中 使用`[]`作为动态属性名
        // 如果不加`[]` 则会被当做字符串处理
        [INCREMENT_BY](state, payload) {
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
import {INCREMENT_BY} from "@/store/mutationTypes";

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
    const callObj = {
        // 使用常量作为事件类型的表达
        type: INCREMENT_BY,
        num: num.value,
    }
    store.commit(callObj)
}
</script>
```