# 1-认识过渡动画

- Vue3提供了一些内置组件和API,用于实现过渡动画效果

- 默认情况下,显隐没有任何过渡,非常生硬:

```vue
<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <h4 v-if="show" style="border:1px solid #dddddd; width: 100px">Hello World</h4>
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
```

- `<transition>`: Vue内置组件,对CSS的`transition`属性进行封装,可以实现过渡动画效果
  - 在`v-if`/`v-show`/`<component>`/组件根节点等情况下可以使用

- 增加过渡动画:

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
/* 元素进入前和离开后应用的样式 */
.why-enter-from,.why-leave-to{
    opacity: 0;
}

/* 元素进入完成和开始离开时应用的样式 */
.why-enter-to,.why-leave-from {
    opacity: 1;
}

/* 元素在进入/离开的过程中  过渡阶段应用的样式 */
.why-enter-active,.why-leave-active {
    transition: opacity 2s ease;
}
</style>
```

- 包含在`<transition>`组件内的元素,当被插入/删除时,框架会执行以下操作:
  - 自动检测目标元素是否应用了CSS过渡/动画,若是,则在适当的时机添加/删除CSS类名
  - 若`<transition>`组件提供了JS钩子函数,则这些钩子函数将在适当的时机被调用
  - 若未找到钩子函数且未检测到CSS过渡.动画,则元素将立即被插入/删除