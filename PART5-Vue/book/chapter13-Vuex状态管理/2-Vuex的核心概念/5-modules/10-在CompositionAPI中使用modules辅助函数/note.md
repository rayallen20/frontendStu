# 10-在CompositionAPI中使用modules辅助函数

- 在有子模块的场景下,封装hook时,就不能再直接用`mapState()`/`mapGetters()`/`mapMutations()`/`mapActions()`了,因为它们只能映射根模块的状态和方法
- 在这种情况下,我们需要使用`createNamespacedHelpers()`函数返回的对象中的函数,将这些函数作为参数,传递给hook函数
- 在hook函数中,调用这些函数即可

- `src/hooks/useState.js`:

```javascript
import {useStore} from "vuex";
import {computed} from "vue";

export function useState(mapFn, mapper) {
    const store = useStore()

    const storeStateFns = mapFn(mapper)

    const storeState = {}

    Object.keys(storeStateFns).forEach(key => {
        const fn = storeStateFns[key]
        const boundFn = fn.bind({$store: store})
        storeState[key] = computed(boundFn)
    })

    return storeState
}
```

- `src/hooks/useGetters.js`:

```javascript
import {useStore} from "vuex";
import {computed} from "vue";

export function useGetters(mapFn, mapper) {
    const store = useStore()

    const storeGettersFns = mapFn(mapper)

    const storeGetters = {}

    Object.keys(storeGettersFns).forEach(key => {
        const fn = storeGettersFns[key]
        const boundFn = fn.bind({$store: store})
        storeGetters[key] = computed(boundFn)
    })

    return storeGetters
}
```

- `src/hooks/useMutations.js`:

```javascript
import {useStore} from "vuex";

export function useMutations(mapFn, mapper, moduleName = null) {
    const store = useStore()

    const actions = mapFn(mapper)

    const storeActions = {}

    Object.keys(actions).forEach(key => {
        if (moduleName === null) {
            storeActions[key] = (payload) => store.commit(key, payload)
        } else {
            storeActions[key] = (payload) => store.commit(`${moduleName}/${key}`, payload)
        }
    })

    return storeActions
}
```

- `src/hooks/useActions.js`:

```javascript
import {useStore} from "vuex";

// moduleName: null表示根模块 非空表示子模块
export function useActions(mapFn, mapper, moduleName = null) {
    const store = useStore()

    const actions = mapFn(mapper)

    const storeActions = {}

    Object.keys(actions).forEach(key => {
        if (moduleName === null) {
            storeActions[key] = (payload) => store.dispatch(key, payload)
        } else {
            storeActions[key] = (payload) => store.dispatch(`${moduleName}/${key}`, payload)
        }
    })

    return storeActions
}
```

- `src/hooks/index.js`:

```javascript
import {useState} from '@/hooks/useState'
import {useGetters} from "@/hooks/useGetters"
import {useMutations} from "@/hooks/useMutations"
import {useActions} from "@/hooks/useActions"

export {
    useState,
    useGetters,
    useMutations,
    useActions,
}
```

- `src/components/UseModules.vue`:

```vue
<template>
    <div class="use-modules">
        <h4>homeCounter: {{homeCounter}}</h4>
        <h4>doubleHomeCounter: {{doubleHomeCounter}}</h4>
        <button @click="increment">+1</button>
        <button @click="incrementAction">+1</button>
    </div>
</template>

<script setup>
import {createNamespacedHelpers} from "vuex"
import {useActions, useGetters, useMutations, useState} from "@/hooks"

// eslint-disable-next-line
defineOptions({
    name: 'UseModules'
})

const homeLib = createNamespacedHelpers('home')
const {homeCounter} = useState(homeLib.mapState, ['homeCounter'])
const {doubleHomeCounter} = useGetters(homeLib.mapGetters, ['doubleHomeCounter'])
const {increment} = useMutations(homeLib.mapMutations, ['increment'], 'home')
const {incrementAction} = useActions(homeLib.mapActions, ['incrementAction'], 'home')
</script>
```