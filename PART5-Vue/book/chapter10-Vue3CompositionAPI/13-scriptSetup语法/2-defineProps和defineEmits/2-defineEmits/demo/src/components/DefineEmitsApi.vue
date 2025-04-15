<template>
    <div class="define-emits-api">
        DefineEmitsApi组件
        <button @click="emitEvent">触发自定义事件</button>
    </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: 'DefineEmitsApi',
})

// eslint-disable-next-line
const emits = defineEmits({
    increment: (num) => {
        if (num < 0) {
            console.warn('num 不能小于0')
            return false
        }

        return true
    }
})

const emitEvent = () => {
    emits('increment', 2)
}
</script>

<style scoped>

</style>