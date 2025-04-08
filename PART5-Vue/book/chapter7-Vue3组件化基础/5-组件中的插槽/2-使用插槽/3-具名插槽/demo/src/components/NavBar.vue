<template>
    <div class="nav-bar">
        <div class="left">
            <!-- 命名插槽 -->
            <slot name="left"></slot>
        </div>

        <div class="center">
            <!-- 命名插槽 -->
            <slot name="center"></slot>
        </div>

        <div class="right">
            <!-- 命名插槽 -->
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
.nav-bar {
    display: flex;
}
.left, .right, .center {
    height: 44px;
    border: 1px solid #999;
    display: flex;
    justify-content: center;
    align-content: center;
}
.center {
    flex: 1;
}
</style>