# 5-v-show和v-if的区别

- `v-show`与`v-if`的区别:
    - `v-show`不支持在`template`标签上使用
    - `v-show`无论条件表达式的值是`true`还是`false`,元素都会被渲染,只是通过`display`属性来控制元素的显示和隐藏
    - `v-if`会根据条件表达式的值来决定是否渲染元素,如果条件表达式的值为`false`,则元素不会被渲染
- `v-show`与`v-if`的使用场景:
    - 元素需要频繁切换显隐时,使用`v-show`
    - 元素不需要频繁切换显隐时,使用`v-if`

```html
<template id="my-app">
    <h2 v-show="isShow">v-show控制显隐</h2>
    <h2 v-if="isShow">v-if控制显隐</h2>
    <button @click="toggle">显隐转换开关</button>
</template>
```