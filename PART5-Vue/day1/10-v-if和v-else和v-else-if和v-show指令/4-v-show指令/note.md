# 4-v-show指令

- `v-show`: 用于控制元素的显示和隐藏,但是该指令不会销毁元素,而是通过`display`属性来控制元素的显示和隐藏

```html
<template id="my-app">
    <h2 v-show="isShow">v-show条件渲染的基本使用</h2>
    <button @click="toggle">控制显隐开关</button>
</template>
```