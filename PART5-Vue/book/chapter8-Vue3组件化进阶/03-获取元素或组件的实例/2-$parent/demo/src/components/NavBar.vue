<template>
    <div class="nav-bar">
        <h4>NavBar</h4>
        <button @click="getParentAndRoot">获取父组件和根组件实例对象</button>
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
        },
        getParentAndRoot() {
            // 获取父组件实例对象
            console.log('$parent: ', this.$parent)

            // 访问父组件实例中的数据
            console.log(this.$parent.names)

            // 获取根组件实例对象
            console.log('$root: ', this.$root)
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