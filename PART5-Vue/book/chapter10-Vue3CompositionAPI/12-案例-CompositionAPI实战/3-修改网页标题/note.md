# 3-修改网页标题

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
import {ref} from "vue";

export default {
    name: 'CompositionApiExample',
    setup() {
        // 修改网页标题
        const titleRef = ref('coder')
        document.title = titleRef.value

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

但是,这种修改网页标题的功能,可能其他组件中也会用到,所以应该封装为一个Hook,这样就可以在其他组件中复用这个功能了:

- `hooks/useTitle.js`:

```javascript
import {ref, watch} from "vue";

function useTitle(title = 'defaultTitle') {
    const titleRef = ref(title)

    watch(titleRef, (newValue) => {
        document.title = newValue
    }, {
        immediate: true,
    })

    // 暴露响应式数据给客户端代码 当客户端代码修改响应式数据时 
    // 由于监听了该响应式数据 因此当客户端代码修改响应式数据时 本函数会自动修改标题内容
    return titleRef
}

export {
    useTitle
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
import {useTitle} from "@/hooks/useTitle";

export default {
    name: 'CompositionApiExample',
    setup() {
        const titleRef = useTitle('coder')

        // 3s后修改网页标题 由于useTitle中监听了titleRef 所以不需要再次调用该函数
        setTimeout(() => {
            titleRef.value = 'coderWhy'
        }, 3000)

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