# 01-使用less

- 安装:`npm install less less-loader`
- 使用:

```vue
<template>
    <div class="box">
        <p>一段文本</p>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="less" scoped>
.box {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    text-align: center;

    p {
        color: #333;
        font-size: 16px;
        margin: 0;
    }
}
</style>
```