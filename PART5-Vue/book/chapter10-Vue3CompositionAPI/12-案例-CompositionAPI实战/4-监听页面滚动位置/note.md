# 4-监听页面滚动位置

- 同理,这个功能可能也是多个组件都需要用到的,把这个逻辑封装成一个Hook函数,然后在需要的地方调用这个函数就可以了

- `hooks/useScrollPosition.js`

```javascript
import {ref} from "vue";

function useScrollPosition() {
    const scrollX = ref(0)
    const scrollY = ref(0)

    document.addEventListener('scroll', () => {
        scrollX.value = window.scrollX
        scrollY.value = window.scrollY
    })

    return {
        scrollX,
        scrollY
    }
}

export {
    useScrollPosition
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

        <p class="area">
            宽3000px 高5000px的区域 用于模拟页面滚动
        </p>

        <div class="position">
            <div>ScrollX: {{scrollX}}</div>
            <div>ScrollY: {{scrollY}}</div>
        </div>
    </div>
</template>

<script>
import {useCounter} from "@/hooks/useCounter"
import {useTitle} from "@/hooks/useTitle";
import {useScrollPosition} from "@/hooks/useScrollPosition";

export default {
    name: 'CompositionApiExample',
    setup() {
        const titleRef = useTitle('coder')
        setTimeout(() => {
            titleRef.value = 'coderWhy'
        }, 3000)

        const {scrollX, scrollY} = useScrollPosition()

        const {counter, doubleCounter, increment, decrement} = useCounter()

        return {
            counter,
            doubleCounter,
            scrollX,
            scrollY,
            increment,
            decrement
        }
    }
}
</script>

<style scoped>
.area {
    width: 3000px;
    height: 5000px;
}

.position {
    position: fixed;
    top: 20px;
    right: 20px;
}
</style>
```