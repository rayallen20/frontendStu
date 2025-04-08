# 1-TransitionGroup的基本使用

```vue
<template>
    <div class="app">
        <button @click="addNum">添加数字</button>
        <button @click="removeNum">删除数字</button>

        <!--
        tag="p" 的作用: 指定所有的span元素(或者可以说列表项,因为<TransitionGroup>组件用于渲染列表项)都渲染在一个p标签中
        相当于指定列表项容器
        -->
        <TransitionGroup
            name="why"
            tag="p"
        >
            <span
                v-for="number in numbers"
                :key="number"
                class="item"
            >
                {{number}}
            </span>
        </TransitionGroup>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            numCounter: 10,
        }
    },
    methods: {
        addNum() {
            const randomIndex = this.randomIndex()
            const num = this.numCounter++
            this.numbers.splice(randomIndex, 0, num)
        },
        randomIndex() {
            // 获取numbers的一个随机索引
            return Math.floor(Math.random() * this.numbers.length)
        },
        removeNum() {
            const randomIndex = this.randomIndex()
            this.numbers.splice(randomIndex, 1)
        }
    }
}
</script>

<style scoped>
.item {
    margin-right: 5px;
    /* 行内元素不支持transform 需要修改为行内块元素 */
    display: inline-block;
}
/* 某个span进入前和离开后的样式 */
.why-enter-from,
.why-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

/* 某个span进入后和离开前的样式 */
.why-enter-to,
.why-leave-from {
    opacity: 1;
    transform: translateY(0);
}

/* 定义动画过程 */
.why-enter-active,
.why-leave-active {
    transition: all 1s ease;
}
</style>
```

- `<TransitionGroup>`组件的`tag`属性:
  - 用于指定所有的span元素(或者可以说列表项,因为`<TransitionGroup>`组件用于渲染列表项)都渲染在一个p标签中
  - **相当于指定列表项容器**
- 行内元素不支持`transform`,需要修改为行内块元素