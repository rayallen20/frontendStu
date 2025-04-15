# 2-代码逻辑的封装和复用

- 在Options API中,使用Mixin混入实现逻辑封装和复用
- 在Composition API中,同样也是将可复用代码封装到一个函数中
  - 这种函数称为自定义Hook函数
  - 这种函数通常以`use`开头,存放于`src/hooks`目录中
  - 通常这种函数的命名,`use`后边都是跟一个名词,表示这个函数是用来处理什么的
  - 函数内部也是处理和该名词相关的逻辑

- `hooks/useCounter.js`:

```javascript
import {computed, ref} from "vue";

function useCounter() {
    const counter = ref(100)

    const doubleCounter = computed({
        get() {
            return counter.value * 2
        }
    })

    const increment = () => counter.value++

    const decrement = () => counter.value--

    return {
        counter,
        doubleCounter,
        increment,
        decrement
    }
}

export {
    useCounter
}
```

- `components/CompositionApiExample.vue`:

```vue
<template>
    <div class="composition-api-example">
        <div>当前计数: {{counter}}</div>
        <div>当前计数 * 2: {{doubleCounter}}</div>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
import {useCounter} from "@/hooks/useCounter"

export default {
    name: 'CompositionApiExample',
    setup() {
        const {counter, doubleCounter, increment, decrement} = useCounter()

        return {
            counter,
            doubleCounter,
            increment,
            decrement
        }
    }
}
</script>
```