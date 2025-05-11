# 5-`mapActions()`辅助函数在CompositionAPI中的使用

- 在Composition API中,使用`mapActions()`辅助函数的思路类似于`mapMutations()`
- 使用`store.dispatch()`分发`mapActions()`函数返回的action即可

- `src/hooks/useActions.js`:

```javascript
import {mapActions, useStore} from "vuex"

export function useActions(mapper) {
    const store = useStore()

    const actions = mapActions(mapper)

    const storeActions = {}

    Object.keys(actions).forEach(key => {
        storeActions[key] = (payload) => store.dispatch(key, payload)
    })

    return storeActions
}
```

- `src/hooks/index.js`:

```javascript
import {useActions} from "@/hooks/useActions"

export {
    useActions
}
```

- `src/components/UseActions.vue`:

```vue
<template>
    <div class="use-actions">
        <h4>当前计数: {{$store.state.counter}}</h4>
        <button @click="incrementAction()">+1</button>
        <button @click="decrementAction">-1</button>
        <input type="number" v-model="num">
        <button @click="incrementByAction({num})">+{{num}}</button>
    </div>
</template>

<script setup>
import {ref} from "vue"
import {useActions} from "@/hooks"

// eslint-disable-next-line
defineOptions({
    name: 'UseActions'
})

const num = ref(0)

const {incrementAction, decrementAction, incrementByAction} = useActions([
    'incrementAction',
    'decrementAction',
    'incrementByAction',
])
</script>
```