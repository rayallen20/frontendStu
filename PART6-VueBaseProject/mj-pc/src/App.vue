<template>
  <div class="app">
    <!-- 一级路由出口 -->
    <RouterView></RouterView>
  </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
  name: 'App'
})

// 读取环境变量
const domain = process.env.VUE_APP_API_BASE_URL
console.log(domain)
</script>

<style lang="scss" scoped>

</style>
