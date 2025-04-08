# 3-appear属性指定初次渲染的过渡动画

默认情况下,首次渲染时是没有过渡/动画效果的,若希望在首次渲染时也有过渡/动画效果,可以使用appear属性来指定

```vue
<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <!-- appear属性的取值是true/false 所以添加appear属性就相当于 appear=true 了 该属性默认值为false -->
        <transition name="why" mode="out-in" appear>
            <component :is="show ? 'HomeCpn' : 'AboutCpn'"></component>
        </transition>
    </div>
</template>

<script>
import HomeCpn from "@/components/HomeCpn.vue"
import AboutCpn from "@/components/AboutCpn.vue"

export default {
    name: 'App',
    components: {
        HomeCpn,
        AboutCpn,
    },
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
.why-enter-from,
.why-leave-to{
    opacity: 0;
}

.why-enter-active,
.why-leave-active {
    transition: opacity 2s ease;
}

.why-enter-to,
.why-leave-from {
    opacity: 1;
}
</style>
```