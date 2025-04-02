# 1-Transition组件的事件和JS钩子

- `App.vue`:

```vue
<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <Transition
            name="why"
            appear
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
        >
            <h4 v-if="show" style="border:1px solid #dddddd; width: 100px">Hello World</h4>
        </Transition>
    </div>
</template>

<script>
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
        // 在元素进入DOM前被调用
        // el: 当前DOM对象
        beforeEnter(el) {
            console.log(el)
            console.log("beforeEnter")
        },
        // 在元素被插入到文档之后的下一帧被调用 相当于定义进入过渡的过程
        // done: 动画结束后的回调函数
        enter(el, done) {
            console.log("enter")
            done()
        },
        // 在元素进入过渡完成时调用
        afterEnter(el) {
            console.log(el)
            console.log("afterEnter")
        },
        // 在元素离开过渡开始时调用
        beforeLeave(el) {
            console.log(el)
            console.log("beforeLeave")
        },
        // 在元素离开过渡开始时调用 相当于定义离开过渡的过程
        leave(el, done) {
            console.log("leave")
            done()
        },
        // 在元素离开过渡完成时调用 (此时元素已经从DOM中移除)
        afterLeave(el) {
            console.log(el)
            console.log("afterLeave")
        }
    }
}
</script>

<style scoped>
</style>
```

页面加载时,控制台输出如下(此处省略了打印元素的代码):

```
beforeEnter
enter
afterEnter
```

切换隐藏时,打印如下:

```
beforeLeave
leave
afterLeave
```

- `@before-enter`: 在元素进入DOM前被调用的钩子函数
- `@enter`: 在元素被插入到文档之后的下一帧被调用,相当于定义进入过渡的过程(常用)
- `@after-enter`: 在元素进入过渡完成时调用的钩子函数
- `@before-leave`: 在元素离开过渡开始时调用的钩子函数
- `@leave`: 在元素离开过渡开始时调用的钩子函数,相当于定义离开过渡的过程(常用)
- `@after-leave`: 在元素离开过渡完成时调用的钩子函数 (此时元素已经从DOM中移除)