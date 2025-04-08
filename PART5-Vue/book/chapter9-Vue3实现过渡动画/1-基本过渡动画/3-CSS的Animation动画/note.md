# 3-CSS的Animation动画

- 使用CSS的`animation`动画也可以定义过渡过程:

```vue
<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <transition name="why">
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
@keyframes bounce {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

/* 进入过渡阶段应用的样式 */
.why-enter-active {
    animation: bounce 2s ease;
}

/* 离开过渡阶段应用的样式 倒放进入阶段的动画即可 */
.why-leave-active {
    animation: bounce 2s ease reverse;
}
</style>
```