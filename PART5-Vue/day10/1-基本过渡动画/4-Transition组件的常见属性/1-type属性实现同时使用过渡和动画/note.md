# 1-type属性实现同时使用过渡和动画

为监听动画的完成,Vue3内部会监听`transitionend`或`animationend`事件,最终监听哪个事件取决于元素应用的CSS样式:

- 如果仅使用了`transition`或`animation`中的一个,则Vue3能够自动识别事件类型,并设置对应的监听事件
- 若同时使用了`transition`和`animation`,就需要在`<transition>`组件上设置`type`属性,来告诉Vue3监听事件的类型
  - 若未设置`type`属性,则自动监听持续时间较长的过渡/动画事件

```vue
<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <transition name="why" type="animation">
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
/* 1. 过渡 */
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

/* 2. 动画 */
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

.why-enter-active {
    animation: bounce 2s ease;
}

.why-leave-active {
    animation: bounce 2s ease reverse;
}
</style>
```

- TODO: 这里我发现不加`type="animation"`也能同时触发过渡和动画
  - 猜测可能是因为过渡和动画时间设置的相同的缘故