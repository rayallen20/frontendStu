# 3-封装mapState

- `hooks/useState.js`:

```javascript
import {mapState, useStore} from "vuex"
import {computed} from "vue"

export function useState(mapper) {
    const store = useStore()

    const storeStateFns = mapState(mapper)

    const storeState = {}

    Object.keys(storeStateFns).forEach(key => {
        const fn = storeStateFns[key]
        // 注意: bind()方法对this的绑定修改不是原地的
        const boundFn = fn.bind({$store: store})
        storeState[key] = computed(boundFn)
    })

    return storeState
}
```

- `hooks/index.js`: (该文件用于集中导出所有的hooks,规范导出方式)

```javascript
import {useState} from "@/hooks/useState"

export {
    useState
}
```

- `src/components/UseMapState.vue`:

```vue
<template>
    <div class="use-computed-read-store"></div>
    <h4>Home: {{$store.state.counter}}</h4>
    <h4>Home: {{storeState.counter}}</h4>
    <h4>Name: {{storeState.name}}</h4>
    <h4>Age: {{storeState.age}}</h4>
</template>

<script setup>
import {useState} from "@/hooks"

// eslint-disable-next-line
defineOptions({
    name: 'UseMapState',
})

const storeMapper = [
    'counter',
    'name',
    'age'
]

const storeState = useState(storeMapper)
</script>
```