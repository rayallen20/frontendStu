<template>
    <div class="app">
        <h4>App组件的message变量:{{message}}</h4>
        <h4>App组件的title变量:{{title}}</h4>
        <!--
        需要双向数据绑定多个props时 使用 v-model:propsName="propsValue"的写法
        -->
        <HyMultipleInput
            v-model:model-value="message"
            v-model:title="title"
        ></HyMultipleInput>
    </div>
</template>

<script>
import HyMultipleInput from "@/components/HyMultipleInput.vue";

export default {
    name: 'App',
    data() {
        return {
            message: 'Hello',
            title: 'World',
        }
    },
    components: {
        HyMultipleInput,
    },
}
</script>