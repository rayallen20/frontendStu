# 3-清除副作用

- 副作用函数也可以接收一个`onInvalidate()`函数作为参数
  - `onInvalidate()`函数接收一个回调函数
  - 当副作用函数再次执行或监听器被停止时,传入`onInvalidate()`函数的回调函数会被执行
  - 该回调函数通常用于执行一些清除副作用的工作
- 例: 在实际开发中,需要在监听函数中执行网络请求,但是在网络请求还没有完成时,就停止了监听器或副作用函数被再次执行了
  - 这种场景下,上一次的网络请求应该被取消,即清除副作用

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
    name: 'WatchEffectApiClear',
    setup() {
        const age = ref(18)

        watchEffect((onCleanup) => {
            const timer = setTimeout(() => (
                console.log('模拟网络请求,网络请求成功')
            ), 2000)

            // 监听到age变化 或 监听停止时 取消网络请求
            onCleanup(() => {
                clearTimeout(timer)
                console.log('取消上一次网络请求')
            })

            console.log('age: ', age.value)
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