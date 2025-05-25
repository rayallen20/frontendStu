<template>
    <div class="app">
        <RouterView v-slot="{ Component }">
            <KeepAlive :include="['HomePage']">
                <Component :is="Component"></Component>
            </KeepAlive>
        </RouterView>
    </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: "App",
})

</script>

<style lang="less" scoped>

</style>