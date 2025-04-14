# 1-基本使用

- `watchEffect()`会自动收集依赖
- `watchEffect()`函数的参数为一个函数(称为副作用函数),该函数会被立即执行一次,且在执行的过程中会收集依赖
- 当收集的依赖发生变化时,副作用函数会再次执行
- 副作用函数不会接收到新值和旧值

```vue
<template>
    <div class="watch-effect-api">
        <h4>{{age}}</h4>
        <button @click="changeAge">age+1</button>
    </div>
</template>

<script>
import {ref, watchEffect} from "vue";

export default {
    name: 'WatchEffectApi',
    setup() {
        const age = ref(18)

        // 副作用函数会自动收集响应式依赖 默认立即执行一次 但是获取不到新值和旧值
        watchEffect(() => {
            // 监听age的变化 age变化后会再次执行副作用函数
            console.log('age:', age.value)
        })

        const changeAge = () => {
            age.value++
        }

        return {
            age,
            changeAge,
        }
    },
}
</script>
```