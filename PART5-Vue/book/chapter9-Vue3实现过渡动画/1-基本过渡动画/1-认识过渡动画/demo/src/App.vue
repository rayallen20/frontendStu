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