<template>
    <div class="about-cpn">
        About组件
        <button @click="add">点击递增: {{counter}}</button>
    </div>
</template>

<script>
export default {
    name: 'AboutCpn',
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add() {
            this.counter++
        },
    },
    created() {
        console.log('About组件的created生命周期')
    },
    unmounted() {
        console.log('About组件的unmounted生命周期')
    },
    // 组件显示时的回调
    activated() {
        console.log('About组件的activated生命周期')
    },
    // 组件隐藏时的回调
    deactivated() {
        console.log('About组件的deactivated生命周期')
    },
}
</script>

<style scoped>

</style>