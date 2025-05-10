# 5-mapGetters辅助函数在CompositionAPI中的使用

- 和在CompositionAPI中使用`mapState()`函数的过程一样,思路上都是把一个普通函数转换成一个计算属性函数

- `src/components/UseMapGetters.vue`:

```vue
<template>
    <div class="use-map-getters"></div>
    <h4>书籍总价: {{$store.getters.totalPrice}}</h4>
    <h4>vue.js总价: {{$store.getters.totalPriceByName('Vue.js')}}</h4>
    <h4>书籍总价: {{storeGetters.totalPrice}}</h4>
    <h4>书籍折扣: {{storeGetters.discount}}</h4>
</template>

<script setup>
import {mapGetters, useStore} from "vuex"
import {computed} from "vue"

// eslint-disable-next-line
defineOptions({
    name: 'UseMapGetters'
})

const store = useStore()
const getterFns = mapGetters({
    totalPrice: 'totalPrice',
    discount: 'currentDiscount'
})
console.log(getterFns)          // {totalPrice: ƒ, discount: ƒ}

const storeGetters = {}
Object.keys(getterFns).forEach(key => {
    const fn = getterFns[key]
    const boundFn = fn.bind({$store: store})
    storeGetters[key] = computed(boundFn)
})

console.log(storeGetters)       // {totalPrice: ComputedRefImpl, discount: ComputedRefImpl}
</script>
```

- 然后再把这个过程封装成一个`hook`即可

- `src/hooks/useGetters.js`:

```javascript
import {mapGetters, useStore} from "vuex"
import {computed} from "vue"

export function useGetters(mapper) {
    const store = useStore()
    const getterFns = mapGetters(mapper)

    const storeGetters = {}

    Object.keys(getterFns).forEach((key) => {
        const fn = getterFns[key]
        const boundFn = fn.bind({$store: store})
        storeGetters[key] = computed(boundFn)
    })

    return storeGetters
}
```

- `src/hooks/index.js`:

```javascript
import {useGetters} from "@/hooks/useGetters"

export {
    useGetters
}
```

- `src/components/UseMapGetters.vue`:

```vue
<template>
    <div class="use-map-getters"></div>
    <h4>书籍总价: {{$store.getters.totalPrice}}</h4>
    <h4>vue.js总价: {{$store.getters.totalPriceByName('Vue.js')}}</h4>
    <h4>书籍总价: {{totalPrice}}</h4>
    <h4>书籍折扣: {{discount}}</h4>
</template>

<script setup>
import {useGetters} from "@/hooks"

// eslint-disable-next-line
defineOptions({
    name: 'UseMapGetters'
})

const {totalPrice, discount} = useGetters({
    totalPrice: 'totalPrice',
    discount: 'currentDiscount'
})
</script>
```