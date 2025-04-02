# 2-GSAP动画库的使用

```vue
<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <!-- :css="false" 表示由JS全权控制动画过渡 此时在钩子函数中 就必须调用done() -->
        <Transition
            name="why"
            @enter="enter"
            @leave="leave"
            :css="false"
            appear
        >
            <h4 v-if="show" style="border:1px solid #dddddd; width: 100px">Hello World</h4>
        </Transition>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    name: 'App',
    data() {
        return {
            show: true
        }
    },
    methods: {
        toggle() {
            this.show = !this.show
        },
        enter(el, done) {
            // 进入过渡调用的动画
            gsap.from(el, {
                // 从缩放0开始
                scale: 0,
                // 从x轴位置为200处开始
                x: 200,
                // 动画结束后调用done()
                onComplete: done,
            })
        },
        leave(el, done) {
            gsap.to(el, {
                // 结束时缩放0 即 transform:scale(0)
                scale: 0,
                // 结束时x轴位置为200 即 transform:translateX(200px)
                x: 200,
                // 动画结束后调用done()
                onComplete: done,
            })
        },
    }
}
</script>

<style scoped>
</style>
```