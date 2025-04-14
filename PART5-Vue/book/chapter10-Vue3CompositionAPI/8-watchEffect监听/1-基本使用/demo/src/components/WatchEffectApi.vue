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