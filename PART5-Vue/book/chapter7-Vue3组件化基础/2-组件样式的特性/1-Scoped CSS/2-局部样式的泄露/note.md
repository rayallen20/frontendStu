# 2-局部样式的泄露

## 1. 局部样式泄露的情况

- 通常情况下,当组件带有scoped时,父组件的样式将不会泄漏到子组件中
- 但是,子组件的根节点会同时受到父组件的作用域样式和子组件的作用域样式的影响
- 这是有意这么设计的,因为父组件可以设置子组件根节点的样式,以达到调整布局的目的

- 子组件Hello.vue:

```vue
<template>
    <h4>Hello World in Child Component</h4>
</template>

<script>
export default {
    name: 'Hello'
}
</script>

<style scoped></style>
```

- 父组件App.vue:

```vue
<template>
    <h4>App Title</h4>
    <Hello></Hello>
</template>


<script>
import Hello from './components/Hello.vue'

export default {
    name: 'App',
    components: {
        Hello,
    }
}
</script>

<style scoped>
h4 {
    text-decoration: underline;
}
</style>
```

- 此时,子组件中的`h4`也会有下划线样式,因为父组件的样式会影响到子组件的根节点

## 2. 避免局部样式泄露

- 减少标签选择器的使用,多使用类选择器(基本等于没说)
- 在子组件的根元素中添加唯一的类选择器
  - 如果在父组件中使用了一些标签选择器,也无法避免局部样式泄露的问题
- 在子组件中使用多个根元素

```vue
<template>
    <h4>Hello World in Child Component</h4>
    <h4>Hello World in Child Component</h4>
</template>

<script>
export default {
    name: 'Hello'
}
</script>

<style scoped>
</style>
```

- 此时,子组件中的`h4`不会有下划线样式
- 原因: Vue这么设计的目的是为了让父组件通过设置子组件根节点的样式,以达到**调整整体布局**的目的
- 而此时子组件有多个根节点,父组件无法通过设置子组件根节点的样式来调整整体布局,也就避免了局部样式泄露的问题

## 注: 子组件的根节点

- 在上例中,所谓子组件的根节点,即:

```
<template>
    <h4>Hello World in Child Component</h4>
</template>
```

中的`<h4>Hello World in Child Component</h4>`

- 子组件的根节点: 指`<template>`标签内的最外层的**1个**HTML元素
- 注意: 即使在根元素同级写了注释,组件也会被认为是`fragment`组件,即没有根节点

## 注: 子组件的根节点样式与父组件的样式冲突

- 当子组件的根节点样式与父组件的样式冲突时,子组件的根节点样式会覆盖父组件的样式

- Hello.vue:

```vue
<template>
    <h4>Hello World in Child Component</h4>
</template>

<script>
export default {
    name: 'Hello'
}
</script>

<style scoped>
h4 {
    text-decoration: overline;
}
</style>
```

此时子组件的上划线样式会覆盖父组件的下划线样式