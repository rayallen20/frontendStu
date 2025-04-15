<template>
    <div class="define-expose-api"></div>
</template>

<script setup>
import {ref} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'DefineExposeApi'
})

const age = 18
const name = ref('coderWhy')
const showMessage = () => {
    console.log('DefineExposeApi组件的showMessage方法')
}

// eslint-disable-next-line
defineExpose({
    age,
    name,
    showMessage
})
</script>

<style scoped>

</style>