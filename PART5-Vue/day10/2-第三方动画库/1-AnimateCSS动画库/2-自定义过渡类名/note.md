# 2-自定义过渡类名

- 以下属性可以自定义过渡类名:
  - `enter-from-class`: 定义进入过渡的起始类名(相当于用一个指定的类,替换`v-enter-from`)
  - `enter-active-class`: 定义进入过渡的过渡类名(相当于用一个指定的类,替换`v-enter-active`)
  - `enter-to-class`: 定义进入过渡的结束类名(相当于用一个指定的类,替换`v-enter-to`)
  - `leave-from-class`: 定义离开过渡的起始类名(相当于用一个指定的类,替换`v-leave-from`)
  - `leave-active-class`: 定义离开过渡的过渡类名(相当于用一个指定的类,替换`v-leave-active`)
  - `leave-to-class`: 定义离开过渡的结束类名(相当于用一个指定的类,替换`v-leave-to`)
- **这些类名的优先级高于普通类名,通常在Vue3的过渡系统结合其他第三方动画库时使用**

```vue
<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <!-- 以自定义过渡类名的方式实现backInLeft 和 backOutRight -->
        <transition
            name="why"
            appear
            enter-active-class="animate__animated animate__backInLeft"
            leave-active-class="animate__animated animate__backOutRight"
        >
            <h4 v-if="show" style="border:1px solid #dddddd; width: 100px">Hello World</h4>
        </transition>
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
        }
    }
}
</script>

<style scoped>
</style>
```