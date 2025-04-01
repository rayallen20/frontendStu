<template>
    <div class="hy-input">
        HyInput组件:
        <input v-model="value">
    </div>
</template>

<script>``
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
    computed: {
        value: {
            set(val) {
                this.$emit('update:model-value', val)
            },
            get() {
                return this.modelValue
            }
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