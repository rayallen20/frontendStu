<template>
    <div class="header-container">
        购物车案例
    </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: 'CartHeader',
})
</script>

<style lang="less" scoped>
.header-container {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    background-color: #42b983;
    text-align: center;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}
</style>