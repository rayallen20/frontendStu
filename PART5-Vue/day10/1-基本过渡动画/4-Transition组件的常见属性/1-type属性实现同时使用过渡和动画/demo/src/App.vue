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