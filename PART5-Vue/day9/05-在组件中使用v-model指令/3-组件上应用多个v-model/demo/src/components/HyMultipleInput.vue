<template>
    <div class="hy-multiple-input">
        HyMultipleInput组件:
        <input :value="modelValue" @input="input1Change">
        <input :value="title" @input="input2Change">
    </div>
</template>

<script>
export default {
    name: 'HyMultipleInput',
    props: {
        modelValue: {
            type: String,
        },
        title: {
            type: String,
        }
    },
    emits: {
        'update:model-value': null,
        'update:title': null
    },
    methods: {
        input1Change(event) {
            this.$emit('update:model-value', event.target.value)
        },
        input2Change(event) {
            this.$emit('update:title', event.target.value)
        }
    }
}
</script>

<style scoped>
.hy-multiple-input{
    border: 1px solid #999;
    margin: 15px;
    padding: 5px;
}
</style>