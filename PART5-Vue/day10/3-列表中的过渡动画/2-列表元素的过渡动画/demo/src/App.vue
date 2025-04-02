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