<template>
    <div class="app">
        <SetupContext :message="message" id="code" class="why" @update:message="updateMessage">
            <template #content>
                <p>第一段内容</p>
                <p>第二段内容</p>
            </template>

            <template #footer>
                2025.04.12
            </template>
        </SetupContext>
    </div>
</template>

<script>
import SetupContext from "@/components/SetupContext.vue"
export default {
    name: 'App',
    components: {
        SetupContext
    },
    data() {
        return {
            message: 'setup函数的参数'
        }
    },
    methods: {
        updateMessage(val) {
            this.message = val
        }
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>