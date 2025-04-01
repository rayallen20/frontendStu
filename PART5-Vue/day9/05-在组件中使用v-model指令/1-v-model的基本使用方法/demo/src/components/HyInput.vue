<template>
    <div class="hy-input">
        HyInput组件:
        <!--
        这里的:value="modelValue" 不能简写为 v-model="modelValue"
        因为modelValue是props传入的变量 子组件中是无法修改来自父组件传递的props的
        -->
        <input :value="modelValue" @input="inputClick">
    </div>
</template>

<script>
export default {
    name: 'HyInput',
    props: {
        modelValue: {
            type: String,
        }
    },
    emits: {
        'update:model-value': null,
    },
    methods: {
        inputClick(event) {
            this.$emit('update:model-value', event.target.value)
        }
    }
}
</script>

<style scoped>
.hy-input{
    border: 1px solid #999;
    margin: 15px;
    padding: 5px;
}
</style>