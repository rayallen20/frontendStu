<template>
    <!--step3. 使用组件-->
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
</template>

<script>
// step1. 导入组件
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
    name: 'App',
    components: {
        // step2. 注册局部组件
        Header,
        Main,
        Footer
    },
}
</script>

<style>
.header, .main, .footer {
    border: 1px solid #999999;
    margin-bottom: 4px;
}
</style>