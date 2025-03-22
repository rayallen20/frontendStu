# 09-v-bind指令

- `v-bind`指令的作用: 用于动态绑定属性,例如`<a>`的`href`属性,`<img>`的`src`属性等

## 1. 绑定基本属性

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

## 2. 绑定class属性

### 2.1 对象语法

- 有时候我们需要动态的给元素绑定多个class,此时可以使用对象语法
  - `v-bind:class="{类名1: 布尔值1, 类名2: 布尔值2, ...}"`
  - 如果布尔值为true,则这个类名会被添加到元素上,否则不会添加
- 也可以像绑定基本属性一样,绑定一个字符串给class
  - `v-bind:class="变量名"`
- 也可以直接绑定一个对象给class
  - `v-bind:class="对象"`
  - 这个对象的key就是类名,value就是布尔值
- 也可以直接调用`methods`中的方法(要求该返回一个对象)
  - `v-bind:class="方法名"`

```html
<template id="my-app">
    <div :class="className">绑定字符串</div>
    <div :class="{active: isActive, title: isTitle}">绑定对象</div>
    <div class="abc" :class="{active: isActive, title: isTitle}">绑定对象(不影响默认的class)</div>
    <div :class="classObj">绑定对象-直接从data的返回值中取属性</div>
    <div :class="getClassObj()">绑定对象-调用方法</div>
    <button @click="toggle">切换Active</button>
</template>
```

### 2.3 数组语法

```html
<template id="my-app">
    <div :class="['abc', title]">使用数组语法绑定class</div>
    <div :class="['abc', title, isActive ? 'active' : '']">使用数组语法绑定class-使用三元运算符</div>
    <div :class="['abc', title, {active: isActive}]">使用数组语法绑定class</div>
</template>
```

## 3. 绑定style属性

### 3.1 对象语法

- 标签中的对象,其属性名会被当做样式名,属性值会被当做样式值
  - `v-bind:style="{样式名1: 样式值1, 样式名2: 样式值2, ...}"`

```html
<template id="my-app">
    <div :style="{color: finalColor, 'font-size': '16px'}">变量和属性混用</div>
    <div :style="{color: finalColor, fontSize: '16px'}">解析对象的属性名为样式名</div>
    <div :style="{color: finalColor, fontSize: finalFontSize + 'px'}">使用属性</div>
    <div :style="finalStyleObj">直接使用对象</div>
    <div :style="getFinalStyleObj()">调用methods中的方法</div>
</template>
```

### 3.2 数组语法

- `:style=[{}, {}]`:数组中的对象若有相同的属性,则后边的会覆盖前边的

```html
<template id="my-app">
    <div :style="[{color: 'red'}, {fontSize: styleObj.fontSize}]">数组中是多个对象</div>
    <div :style="[styleObj, styleObj2]">数组中是多个对象-相同属性后边的覆盖前面的</div>
</template>
```

## 4. 动态绑定属性

- 所谓动态绑定属性,就是属性名和属性值都是变量
  - `:属性名="变量名"`

```html
<template id="my-app">
    <div :[name]="value">动态绑定属性和值</div>
</template>
```

## 5. 绑定对象


- `:=对象属性名`: 绑定对象的属性
  - 效果相当于解构这个对象,以`属性名=属性值`的形式将对象的属性绑定到元素上
  - 如果属性的类型为数组,则最终绑定的形式为`属性名=元素值1,元素值2,...`
  - 如果属性的类型为对象,则最终绑定的形式为`[Object Object]`
    - 这也就说明,如果属性类型为对象,不能直接绑定

```html
<template id="my-app">
    <div :="info">绑定对象</div>
</template>
```