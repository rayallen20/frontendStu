<template>
    <button>按钮</button>
</template>

<script>
export default {
    name: 'ButtonGlobal',
}
</script>

<style lang="less" scoped>
button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
}
</style>