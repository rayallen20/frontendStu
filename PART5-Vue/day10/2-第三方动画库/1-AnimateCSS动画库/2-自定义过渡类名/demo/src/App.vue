<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <!-- 以自定义过渡类名的方式实现backInLeft 和 backOutRight -->
        <transition
            name="why"
            appear
            enter-active-class="animate__animated animate__backInLeft"
            leave-active-class="animate__animated animate__backOutRight"
        >
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
</style>