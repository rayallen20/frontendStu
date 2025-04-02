# 2-列表元素的过渡动画

- `v-move`类: 
  - 该类用于定义元素在列表中移动时的过渡效果
  - 同样的,若定义了`name`属性,该类也可以命名为`name-move`
  - 同样的,该类也可以自定义过渡类名,例如`move-class="your-class-name"`(注意: 该类名不能与`name`属性相同)

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
            move-class="move-transition"
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
    display: inline-block;
}

.why-enter-from,
.why-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.why-enter-to,
.why-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.why-enter-active,
.why-leave-active {
    transition: all 1s ease;
}

/* 定义span移动时的过渡效果 */
.move-transition {
    transition: all 1s ease;
}
</style>
```

- 这段代码在动效上有一个问题: 添加元素时的向右移动的动效是有的,但是删除元素时向左移的动效却无效
- 原因: 在删除`<span>`时,在该元素尚未移出列表时,仍然会占据宽度,这导致该元素右侧的所有`<span>`无法向左移动
- 解决办法: 让被删除的`<span>`脱离标准流
- 技术手段: 绝对定位

```vue
<template>
    <div class="app">
        <button @click="addNum">添加数字</button>
        <button @click="removeNum">删除数字</button>
      
        <TransitionGroup
            name="why"
            tag="p"
            move-class="move-transition"
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
    display: inline-block;
}

.why-enter-from,
.why-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.why-enter-to,
.why-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.why-enter-active {
    transition: all 1s ease;
}

/* 定义span移动时的过渡效果 */
.move-transition {
    transition: all 1s ease;
}

/* 定义span离开时动画的过程 */
.why-leave-active {
    /* 使用绝对定位 让被删除的元素脱离标准流 */
    position: absolute;
    transition: all 1s ease;
}
</style>
```