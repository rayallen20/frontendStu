# 05-SCSS语法说明

- `pnpm install sass`: 安装Sass预处理器
- `pnpm install sass-loader`: 安装Sass加载器

语法:

- `$变量名`: 定义变量
- 和LESS一样,也是使用`{}`来定义层级
  - SASS/Stylus使用缩进来定义层级

演示:

- `App.vue`:

```vue
<template>
  <div class="app">
    <!-- 一级路由出口 -->
    <RouterView></RouterView>
    <div class="scss-test">
      <p>hello</p>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
  name: 'App'
})
</script>

<style lang="scss" scoped>
$green: #00ff00;
$red: #ff0000;

.scss-test {
  width: 100px;
  height: 100px;
  background-color: $green;
  p {
    color: $red;
  }
}
</style>
```