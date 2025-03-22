# 10-v-if和v-else和v-else-if和v-show指令

## 1. `v-if`和`v-else`指令

- `v-if`: 用于判断是否渲染当前的元素.该指令是**惰性**的:
  - 即如果判断为`false`,则当前元素会被销毁(**即不被渲染,换言之,`v-if`判断为false,则当前元素不参与编译**)
  - 仅当条件判断为`true`时,元素才会被渲染

```html
<template id="my-app">
    <h2 v-if="isShow">v-if条件渲染的基本使用</h2>
    <button @click="toggle">单击切换显示和隐藏</button>
</template>
```

## 2. `v-if`和`v-else`和`v-else-if`混用

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

## 3. `v-if`和template结合使用

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

## 4. `v-show`指令

- `v-show`: 用于控制元素的显示和隐藏,但是该指令不会销毁元素,而是通过`display`属性来控制元素的显示和隐藏

```html
<template id="my-app">
    <h2 v-show="isShow">v-show条件渲染的基本使用</h2>
    <button @click="toggle">控制显隐开关</button>
</template>
```

## 5. `v-show`和`v-if`的区别

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

## 6. 练习

```html
<template id="my-app">
  <p v-if="gender === 1">性别：♂ 男</p>
  <p v-else>性别：♀ 女</p>

  <hr>

  <p v-if="score >= 90">成绩评定A：奖励电脑一台</p>
  <p v-else-if="score >= 70 && score < 90">成绩评定B：奖励周末郊游</p>
  <p v-else-if="score >= 60 && score < 70">成绩评定C：奖励零食礼包</p>
  <p v-else>成绩评定D：惩罚一周不能玩手机</p>
</template>
```