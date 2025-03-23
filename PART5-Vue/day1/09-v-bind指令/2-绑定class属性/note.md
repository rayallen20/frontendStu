# 2-绑定class属性

## 2.1 对象语法

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

## 2.2 数组语法

```html
<template id="my-app">
    <div :class="['abc', title]">使用数组语法绑定class</div>
    <div :class="['abc', title, isActive ? 'active' : '']">使用数组语法绑定class-使用三元运算符</div>
    <div :class="['abc', title, {active: isActive}]">使用数组语法绑定class</div>
</template>
```