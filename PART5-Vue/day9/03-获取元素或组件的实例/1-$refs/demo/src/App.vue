<template>
    <div class="app">
        <!--1. 在h4上通过ref属性注册一个模板引用-->
        <h4 ref="title">App中的h4元素</h4>
        <!--2. 在NavBar组件上通过ref属性注册一个模板引用-->
        <NavBar ref="navBar"></NavBar>

        <button @click="btnClick">获取h4对象和NavBar组件实例</button>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
    name: "App",
    components: {
        NavBar,
    },
    data() {
        return {
            names: [
                'coder',
                'why',
            ],
        }
    },
    methods: {
        btnClick() {
            // 访问已注册的模板引用
            console.log('h4元素对象:', this.$refs.title)
            console.log('NavBar组件实例:', this.$refs.navBar)

            // 访问NavBar组件实例中的数据和方法
            console.log('NavBar组件中的message:', this.$refs.navBar.message)
            this.$refs.navBar.sayHello()

            // 获取组件实例的DOM元素
            console.log(this.$refs.navBar.$el)
        }
    }
}
</script>


<style scoped>
.app{
    border: 1px solid #999;
    margin: 5px;
    padding: 8px;
}

</style>