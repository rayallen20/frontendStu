# 1-基本使用

- `src/state/index.js`:

```javascript
import {createStore} from "vuex"

const store = createStore({
    state() {
        return {
            counter: 0,
        }
    },
})

export default store
```

- `src/components/UseComputedReadStore.vue`:

```vue
<template>
    <div class="use-computed-read-store"></div>
    <h4>Home: {{counter}}</h4>
    <h4>Home: {{$store.state.counter}}</h4>
</template>

<script setup>
import {useStore} from "vuex"
import {computed} from "vue"

// eslint-disable-next-line
defineOptions({
    name: 'UseComputedReadStore'
})

const store = useStore()
const counter = computed({
    get() {
        return store.state.counter
    },
})
</script>
```

- 这种场景下,仅在`state`中定义了1个属性,如果定义了多个属性,那么这种写法会比较繁琐