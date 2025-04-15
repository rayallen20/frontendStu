<template>
    <div class="app">
        App组件
        <CompositionApiExample></CompositionApiExample>
    </div>
</template>

<script>
import CompositionApiExample from "@/components/CompositionApiExample.vue"

export default {
    name: 'App',
    components: {
        CompositionApiExample,
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>