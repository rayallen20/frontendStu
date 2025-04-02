<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <transition name="why" appear>
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
/* 使用Animate.css的backLeft 从左边进入 */
.why-enter-active {
   animation: backInLeft 2s ease-in;
}

/* 使用Animate.css的backOutRight 从右边离开 */
.why-leave-active {
    animation: backOutLeft 2s ease-in;
}
</style>