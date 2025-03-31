<template>
    <div>
        <h2>App组件</h2>
        <p>这是App组件中的p标签</p>
        <hr />
        <MyTest></MyTest>
        <hr />
        <MyForm ref="myFormComponent"></MyForm>
        <button @click="resetForm">重置</button>
    </div>
</template>

<script>
import MyTest from './components/MyTest.vue'
import MyForm from './components/MyForm.vue'
export default {
    data () {
        return {}
    },
    components: {
        MyTest,
        MyForm
    },
    methods: {
        resetForm() {
            // 1. 通过refs获取组件实例
            const myFormComponent = this.$refs.myFormComponent

            // 2. 调用子组件的方法
            myFormComponent.resetForm()
        }
    }
}
</script>

<style lang="css" scoped></style>
