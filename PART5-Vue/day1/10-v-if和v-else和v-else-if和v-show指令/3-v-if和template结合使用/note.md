# 3-v-if和template结合使用

- 当需要使用`v-if`指令控制多个元素时,可以使用`template`标签包裹这些元素,然后在`template`标签上使用`v-if`指令

```html
<template id="my-app">
    <template v-if="isShow">
        <h3>v-if控制多个h3的显隐</h3>
        <h3>v-if控制多个h3的显隐</h3>
        <h3>v-if控制多个h3的显隐</h3>
    </template>
    
    <template v-else>
        <h4>v-if控制多个h4的显隐</h4>
        <h4>v-if控制多个h4的显隐</h4>
        <h4>v-if控制多个h4的显隐</h4>
    </template>
    
    <button @click="toggle">切换template</button>
</template>
```

- 指令也可以加在`template`标签上