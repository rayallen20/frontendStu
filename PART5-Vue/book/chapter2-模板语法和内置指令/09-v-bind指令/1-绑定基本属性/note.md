# 1-绑定基本属性

- 注意: 插值表达式是不能直接用在属性值的,需要使用`v-bind`指令
    - `v-bind:属性名="变量名"`
    - 简写: `:属性名="变量名"`

```html
<template id="my-app">
  <img v-bind:src="imgUrl" alt="图片">
  <a v-bind:href="link">百度一下</a>

  <!--v-bind指令的语法糖-->
  <img :src="imgUrl" alt="图片">

  <!--直接赋值不会被识别为变量-->
  <img src="imgUrl" alt="图片">
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const args = {
    template: '#my-app',
    data() {
      return {
        imgUrl: "https://v2.cn.vuejs.org/images/logo.png",
        link: "https://www.baidu.com"
      }
    },
  }

  const app = Vue.createApp(args)
  app.mount('#app')
</script>
```