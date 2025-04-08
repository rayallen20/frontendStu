# 1-基本使用

- 语法:
    - `v-for="item in data"`
    - `v-for="(item, index) in data"`
- 其中`data`表示数组

```html
<template id="my-app">
    <h4>1. 电影列表(遍历数组)</h4>
    <ul>
        <li v-for="movie in movies">{{movie}}</li>
    </ul>
    
    <h4>2. 电影列表(遍历数组)</h4>
    <ul>
        <li v-for="(movie, index) in movies">{{index + 1}}. {{movie}}</li>
    </ul>
</template>
```