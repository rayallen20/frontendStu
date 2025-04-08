<template>
    <div class="home-cpn" @click="handleClick">
        Home组件: {{name}} - {{age}}
    </div>
</template>

<script>
export default {
    name: 'HomeCpn',
    props: {
        name: {
            type: String,
            default: '',
            required: true,
        },
        age: {
            type: Number,
            default: 0,
            required: true,
        },
    },
    emits: ['cpnClick'],
    methods: {
        handleClick() {
            this.$emit('cpnClick', 'HomeCpn组件被点击了')
        }
    }
}
</script>

<style scoped>
div{
    cursor: pointer;
}
</style>