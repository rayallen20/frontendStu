<template>
    <div class="home-page">
        <!-- 使用了BasePage组件中的数据 -->
        <h4>{{title}}</h4>
        <button @click="bar">点击调用BasePage组件定义的bar方法</button>
    </div>
</template>

<script>
import BasePage from "@/components/BasePage.vue"
export default {
    name: "HomePage",
    // 复用BasePage组件中的数据和方法
    // extends属性只能复用script中的数据和方法 不能复用template中的DOM结构
    // extends属性只能继承1个组件
    extends: BasePage,
}
</script>

<style scoped>
.home-page {
    border: 1px solid #dddddd;
    margin: 10px;
}
</style>