<template>
    <div class="app">
        <input type="number" v-model="counter">
        <h2>当前计数: {{showNumber.toFixed(0)}}</h2>
    </div>
</template>

<script>
import {gsap} from "gsap"

export default {
    name: 'App',
    data() {
        return {
            counter: 1,
            showNumber: 0
        }
    },
    watch: {
        counter: {
            handler(newValue) {
                // this: 当前组件实例
                // gsap.to(this, {}): 相当于定义了对哪个元素作何种动画
                // 只是响应式数据也可以被gsap修改而已
                gsap.to(this,{
                    // 对当前组件的showNumber属性进行修改
                    showNumber: newValue,
                    // 修改的过程持续1s
                    duration: 1,
                })
            }
        }
    }
}
</script>