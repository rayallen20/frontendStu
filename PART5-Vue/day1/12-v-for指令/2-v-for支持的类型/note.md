# 2-v-for支持的类型

## 2.1 `v-for`遍历对象

- 遍历值: `v-for=value in object`
- 遍历键值对: `v-for=(value, key) in object`
- 遍历键值对及索引: `v-for=(value, key, index) in object`

```html
<template id="my-app">
    <h4>1. 个人信息(遍历值)</h4>
    <ul>
        <li v-for="value in user">{{value}}</li>
    </ul>
    
    <h4>2. 个人信息(遍历键值对)</h4>
    <ul>
        <li v-for="(value, key) in user">{{key}}: {{value}}</li>
    </ul>
    
    <h4>3. 个人信息(遍历键值对和索引)</h4>
    <ul>
        <li v-for="(value, key, index) in user">索引:{{index + 1}} {{key}}: {{value}}</li>
    </ul>
</template>
```

## 2.2 `v-for`遍历数字

- 遍历值: `v-for="value in 10"`
- 遍历值和索引: `v-for="(value, index) in 10`

```html
<template id="my-app">
    <h4>1. 仅遍历值</h4>
    <ul>
        <!--值: 从1开始计算 到<=counter为止 此处打印 1-10(包含10)-->
        <li v-for="count in counter">{{count}}</li>
    </ul>
    
    <h4>2. 遍历值和索引</h4>
    <ul>
        <!--索引: 从0开始计算 到<counter为止 此处索引值为0-9(包含9)-->
        <li v-for="(count, index) in counter">索引:{{index}} 值:{{count}}</li>
    </ul>
</template>
```