# 5-v-for的key属性

- 作用: 为每个节点设置唯一的key值,以便更高效的更新虚拟DOM
    - key的值应该是唯一的(这个唯一的范围是指确保在同一个`v-for`循环内,每个项的key值唯一)
    - 这个key属性不会被渲染到页面上,只是在虚拟DOM中使用
    - `v-for`指令默认会尝试**原地修改元素(就地复用)**,加上唯一的`key`属性,可以让Vue跟踪每个节点的身份,从而重用和重新排序现有元素.而且会避免掉很多奇怪的bug
    - 推荐使用`id`作为`key`的值,因为`id`是唯一的;不推荐使用`index`因为数组中元素的顺序可能会发生变化

```html
<template id="my-app">
    <h4>1. 电影列表(遍历数组)</h4>
    <ul>
        <li v-for="movie in movies" :key="movie">{{movie}}</li>
    </ul>
    
    <h4>2. 电影列表(遍历数组和索引)</h4>
    <ul>
        <!--
        每个key属性的作用域都在当前的v-for指令中
        因此此处的key和上边的key虽然值相同 但是不会冲突 因为不在同一个v-for的循环内
        -->
        <li v-for="(movie, index) in movies" :key="movie">{{index + 1}}. {{movie}}</li>
    </ul>
</template>
```