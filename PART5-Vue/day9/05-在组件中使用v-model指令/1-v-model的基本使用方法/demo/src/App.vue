<template>
    <div class="app">
        <h4>App组件的message变量:{{message}}</h4>
        <!--
        <HyInput :modelValue="message"
        @update:model-value="message = $event"></HyInput>
        -->
        <!-- 两种写法等价 -->
        <HyInput v-model="message"></HyInput>
    </div>
</template>

<script>
import HyInput from "@/components/HyInput.vue"

export default {
    name: 'App',
    data() {
        return {
            message: 'hello world',
        }
    },
    components: {
        HyInput,
    },
    methods: {
        changeMessage() {
            this.message = 'coderWhy'
        }
    }
}
</script>