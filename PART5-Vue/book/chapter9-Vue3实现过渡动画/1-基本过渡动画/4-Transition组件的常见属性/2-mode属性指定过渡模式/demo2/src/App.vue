<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <transition name="why" mode="out-in">
            <component :is="show ? 'HomeCpn' : 'AboutCpn'"></component>
        </transition>
    </div>
</template>

<script>
import HomeCpn from "@/components/HomeCpn.vue"
import AboutCpn from "@/components/AboutCpn.vue"

export default {
    name: 'App',
    components: {
        HomeCpn,
        AboutCpn,
    },
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