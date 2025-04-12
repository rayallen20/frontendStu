<template>
    <div class="setup-return">
        <h4>当前计数: {{counter}}</h4>

        <!-- 普通对象中的ref对象可以自动解包 -->
        <h3>当前计数(普通对象info): {{info.counter}}</h3>

        <!-- reactive对象中的ref对象可以自动解包 -->
        <h3>当前计数(reactive对象reactiveInfo): {{reactiveInfo.counter}}</h3>

        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {reactive, ref} from "vue"

export default {
    name: "RefApiOther",
    setup() {
        let counter = ref(100)

        const info = {
            counter,
        }

        const reactiveInfo = reactive({
            counter,
        })

        const increment = () => {
            counter.value++
            console.log(counter.value)
        }

        return {
            counter,
            info,
            reactiveInfo,
            increment
        }
    }
}
</script>