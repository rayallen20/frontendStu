<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <transition name="why" mode="out-in">
            <h4 v-if="show" style="border:1px solid #dddddd; width: 100px">Hello World</h4>
            <h4 v-else style="border:1px solid #dddddd; width: 100px">你好,张三</h4>
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