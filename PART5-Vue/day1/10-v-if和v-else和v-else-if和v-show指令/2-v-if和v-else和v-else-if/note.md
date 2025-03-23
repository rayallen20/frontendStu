# 2-v-if和v-else和v-else-if

```html
<template id="my-app">
    <input type="text" v-model="score">
    <h2 v-if="score >= 90">优秀</h2>
    <h2 v-else-if="score >= 60">良好</h2>
    <h2 v-else>不及格</h2>
</template>
```

- 其实这3个指令本质上就是JS的`if`/`else if`/`else`语句
- `v-model`: 双向数据绑定