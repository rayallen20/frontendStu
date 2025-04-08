# 1-v-if和v-else

- `v-if`: 用于判断是否渲染当前的元素.该指令是**惰性**的:
    - 即如果判断为`false`,则当前元素会被销毁(**即不被渲染,换言之,`v-if`判断为false,则当前元素不参与编译**)
    - 仅当条件判断为`true`时,元素才会被渲染

```html
<template id="my-app">
    <h2 v-if="isShow">v-if条件渲染的基本使用</h2>
    <button @click="toggle">单击切换显示和隐藏</button>
</template>
```