# 12-v-for指令

- `v-for`: 用于循环遍历数组或对象

## 1. `v-for`的基本使用

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

## 2. `v-for`支持的类型

- `v-for`遍历对象:
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

- `v-for`遍历数字:
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

## 3. `v-for`和template结合使用

- 用于要同时渲染1个元素的多个属性(键/值/索引)

```html
<template id="my-app">
    <template v-for="(value, key) in user">
        <li>{{key}}</li>
        <li>{{value}}</li>
        <li :class="{line: isLine}"></li>
    </template>
</template>
```

## 4. 数组的更新检测

### 4.1 调用数组的变更方法

在`data`中定义的变量属于响应式变量(修改这些变量的值,会自动触发视图的更新),但是对于数组:

- 调用一些返回新数组的方法,则不会触发视图的更新,如:
  - `filter()`: 创建一个新数组,其中包含通过指定函数测试的所有元素
  - `concat()`: 连接两个或多个数组,并返回结果
  - `slice()`: 选取数组的一部分,并返回一个新数组
- 调用一些会改变原数组的方法,则会触发视图的更新,如:
  - `push()`: 向数组的末尾添加一个或多个元素,并返回新的长度
  - `pop()`: 删除数组的最后一个元素,并返回该元素
  - `shift()`: 删除数组的第一个元素,并返回该元素
  - `unshift()`: 向数组的开头添加一个或多个元素,并返回新的长度
  - `splice()`: 从数组中添加/删除项目,并返回被删除的项目
  - `sort()`: 对数组的元素进行排序
  - `reverse()`: 颠倒数组中元素的顺序

```html
<template id="my-app">
    <h4>电影列表(遍历数组和索引)</h4>
    <ul>
        <li v-for="(movie, index) in movies">{{index + 1}}. {{movie}}</li>
    </ul>
    <input type="text" v-model="newMovie">
    <br>
    <button @click="addMovie">添加新电影</button>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                newMovie: "",
                movies: [
                    '星际穿越',
                    '盗梦空间',
                    '致命魔术'
                ],
            }
        },
        methods: {
            addMovie() {
                if (this.newMovie === "") {
                    alert('请输入电影名称')
                    return
                }

                this.movies.push(this.newMovie)
                this.newMovie = ''
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

### 4.2 重置响应式变量的值为新数组

- 针对那些返回新数组的方法,可以通过将新数组赋值给`data`中的响应式变量的方式,来触发视图的更新
- 本质: **当响应式变量的值发生变化时,Vue会自动触发视图的更新**

```html
<template id="my-app">
    <h4>电影列表(遍历数组和索引)</h4>
    <ul>
        <li v-for="(movie, index) in movies">{{index + 1}}. {{movie}}</li>
    </ul>
    <button @click="showTopThreeMovies">仅显示排行前3的电影</button>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                newMovie: "",
                movies: [
                    '星际穿越',
                    '盗梦空间',
                    '致命魔术',
                    '教父',
                    '东京热',
                ],
            }
        },
        methods: {
            showTopThreeMovies() {
                this.movies = this.movies.filter((movie, index) => index < 3)
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

## 5. `v-for`的key属性

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