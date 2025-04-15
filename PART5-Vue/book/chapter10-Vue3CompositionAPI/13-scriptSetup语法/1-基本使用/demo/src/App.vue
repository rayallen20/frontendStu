<template>
    <div class="app">
        App组件
        <ScriptSetupExample></ScriptSetupExample>
    </div>
</template>

<script setup>
import ScriptSetupExample from "@/components/ScriptSetupExample.vue"

// eslint-disable-next-line
defineOptions({
    name: 'App'
})
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>