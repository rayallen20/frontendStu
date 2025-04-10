<template>
    <div class="app">
        <!-- 1级路由直接展示全页面 所以这里只有一个RouterView -->
        <RouterView v-slot="{ Component }">
            <KeepAlive :include="['HomePage']">
                <component :is="Component" />
            </KeepAlive>
        </RouterView>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="less" scoped>
</style>
