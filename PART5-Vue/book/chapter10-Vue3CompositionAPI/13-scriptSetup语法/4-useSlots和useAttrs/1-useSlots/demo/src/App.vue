<template>
    <div class="app">
        App组件
        <UseSlotsApi>
            <template #content>
                <div>内容</div>
            </template>

            <template #footer>
                <div>页脚</div>
            </template>
        </UseSlotsApi>
    </div>
</template>

<script setup>
import UseSlotsApi from "@/components/UseSlotsApi.vue"
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>