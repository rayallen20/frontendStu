# 1-组件的局部样式

- `<style scoped>`:当SFC(单文件组件)中的style标签带有scoped属性时,表示在该标签中定义的样式,仅在当前组件中生效
    - 且Vue3会自动将选择器编译成带有唯一属性的选择器,避免与其他组件中的样式冲突

```vue
<template>
    <div class="example">hi</div>
</template>

<script>
export default {
    name: 'hi'
}
</script>

<style scoped>
.example {
    color: red;
}
</style>
```

上边的样式被PostCSS转换后的结果:

```
<div data-v-09dfd6b1="" class="example">hi</div>

.example[data-v-09dfd6b1] {
  color: red;
}
```

- 从原理上来讲,Vue给每个标签先加上一个唯一的属性(`v-data-hash值`),然后在style标签中使用这个属性作为选择器(属性选择器`[v-data-hash值]`),这样就可以避免组件之间的样式冲突了
- 注: style标签上带有scoped属性则为局部样式,没有则为全局样式
- 1个组件内支持包含多个style标签