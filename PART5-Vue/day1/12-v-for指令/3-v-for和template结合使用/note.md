# 3-v-for和template结合使用

- 用于要同时渲染1个元素的多个属性(键/值/索引)

```html
<template id="my-app">
    <template v-for="(value, key) in user">
        <li>{{key}}</li>
        <li>{{value}}</li>
        <li :class="{line: isLine}"></li>
    </template>
</template>
```