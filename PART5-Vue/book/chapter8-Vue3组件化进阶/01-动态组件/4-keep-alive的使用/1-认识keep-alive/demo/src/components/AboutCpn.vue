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
}
</script>

<style scoped>

</style>