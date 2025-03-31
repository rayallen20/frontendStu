<template>
    <div>
        <h3>Test组件需求：找到下面的p标签，设置样式</h3>
        <p v-for="index in num" :key="index" ref="paragraph">这是Test组件中的第{{index + 1}}个p标签</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 4
        }
    },
    mounted() {
        const paragraphEleCollection = this.$refs.paragraph
        console.log(paragraphEleCollection)     // 通过循环遍历渲染的元素 若有相同的ref值则会返回一个数组
        paragraphEleCollection.forEach(paragraph => paragraph.classList.add('active'))
    }
}
</script>

<style scoped>
.active {
    color: red;
    font-size: 30px;
}
</style>
