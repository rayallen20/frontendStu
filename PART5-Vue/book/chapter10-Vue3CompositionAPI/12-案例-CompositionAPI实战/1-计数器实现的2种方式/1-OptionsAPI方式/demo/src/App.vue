<template>
    <div class="app">
        App组件
        <OptionsApiExample></OptionsApiExample>
    </div>
</template>

<script>
import OptionsApiExample from "@/components/OptionsApiExample.vue"

export default {
    name: 'App',
    components: {
        OptionsApiExample,
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>