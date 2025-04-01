<template>
    <div class="nav-bar">
        <h4>NavBar</h4>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            message: '我是NavBar组件中的message变量'
        }
    },
    methods: {
        sayHello() {
            console.log('sayHello:Hello NavBar')
        }
    }
}
</script>

<style scoped>
.nav-bar{
    border: 1px solid #999;
    margin: 8px 0;
}
button{
    margin: 5px;
}
</style>