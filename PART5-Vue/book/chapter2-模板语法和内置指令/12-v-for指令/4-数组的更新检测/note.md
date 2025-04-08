# 4-数组的更新检测

## 4.1 调用数组的变更方法

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

## 4.2 重置响应式变量的值为新数组

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