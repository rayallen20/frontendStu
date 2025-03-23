# 3-绑定style属性

## 3.1 对象语法

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

## 3.2 数组语法

- `:style=[{}, {}]`:数组中的对象若有相同的属性,则后边的会覆盖前边的

```html
<template id="my-app">
    <div :style="[{color: 'red'}, {fontSize: styleObj.fontSize}]">数组中是多个对象</div>
    <div :style="[styleObj, styleObj2]">数组中是多个对象-相同属性后边的覆盖前面的</div>
</template>
```