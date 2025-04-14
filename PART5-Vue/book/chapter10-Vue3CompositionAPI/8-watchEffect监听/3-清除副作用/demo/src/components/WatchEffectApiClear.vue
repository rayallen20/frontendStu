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