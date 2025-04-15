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