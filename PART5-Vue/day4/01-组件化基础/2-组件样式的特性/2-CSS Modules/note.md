# 2-CSS Modules

- `<style module>`: 当组件的`<style>`标签带有module属性时,标签会被编译为CSS Modules,并将生成的CSS类作为`$sytle`对象的key暴露给组件

```vue
<template>
    <p :class="$style.red">This is should be red</p>
</template>

<script>
export default {
    name: 'Hello'
}
</script>

<style module>
.red {
    color: red;
}
</style>
```

- 这种方式用的比较少