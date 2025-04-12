<template>
    <div class="app">
        App组件
        <HomePage></HomePage>
    </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue"
export default {
    name: 'App',
    components: {
        HomePage,
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>