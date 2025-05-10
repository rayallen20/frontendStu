# 6-`mapMutations()`辅助函数在CompositionAPI中的使用

- `mapMutations()`辅助函数在CompositionAPI中的使用和之前的`mapState()`/`mapGetters()`辅助函数不同
- 不再需要将一个普通函数转换为一个计算属性函数了
- 而是需要使用`store.commit()`调用这个方法

- `src/hooks/useMutations.js`:

```javascript
import {mapMutations, useStore} from "vuex";

export function useMutations(mapper) {
    const store = useStore()

    const mutations = mapMutations(mapper)

    const storeMutations = {}

    Object.keys(mutations).forEach((key) => {
        storeMutations[key] = (payload) => {
            store.commit(key, payload)
        }
    })

    return storeMutations
}
```

- `src/hooks/index.js`:

```javascript
import {useMutations} from "@/hooks/useMutations"

export {
    useMutations
}
```

- `src/components/UseMutations.vue`:

```vue
<template>
    <div class="use-mutations">
        <h4>当前计数: {{$store.state.counter}}</h4>
        <!--
        注意: 这里写@click="increment"和@click="increment()"是有区别的
        二者在mutation中的payload不同
        @click="increment"的payload是事件对象
        @click="increment()"的payload是undefined
        -->
        <button @click="increment()">+1</button>
        <button @click="decrement()">-1</button>
        <input type="number" v-model="num">
        <button @click="incrementBy({num})">+{{num}}</button>
    </div>
</template>

<script setup>
    import {ref} from "vue"
    import {useMutations} from "@/hooks";
    import {INCREMENT_BY} from "@/store/mutationTypes";

    // eslint-disable-next-line
    defineOptions({
        name: 'UseMutations'
    })

    const num = ref(0)

    const {increment, decrement, incrementBy} = useMutations([
        'increment',
        'decrement',
        INCREMENT_BY
    ])
</script>
```