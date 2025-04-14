# 2-watch函数监听reactive创建的响应式对象

- `watch()`函数:
    - 第1个参数是一个`reactive()`函数创建的响应式对象
    - 第2个参数是一个回调函数(副作用函数),该函数会在`getter()`函数返回值变化时被调用

```vue
<template>
    <div class="watch-api">
        <h4>{{info.name}}</h4>
        <button @click="changeName">修改数据</button>
    </div>
</template>

<script>
import {reactive, watch} from "vue";

export default {
    name: 'WatchApi',
    setup() {
        const info = reactive({name: 'coderWhy', age: 18})

        // 第1个参数是响应式对象
        watch(info, (newValue, oldValue) => {
            console.log('newValue: ', newValue)     // 打印的是响应式对象
            console.log('oldValue: ', oldValue)     // 打印的是响应式对象
        })

        const changeName = () => {
            info.name = 'kobe'
        }

        return {
            info,
            changeName
        }
    },
}
</script>
```

- 如果希望`newValue`和`oldValue`是普通对象,可以按照如下写法:

```vue
<template>
    <div class="watch-api">
        <h4>{{info.name}}</h4>
        <button @click="changeName">修改数据</button>
    </div>
</template>

<script>
import {reactive, watch} from "vue";

export default {
    name: 'WatchApi',
    setup() {
        const info = reactive({name: 'coderWhy', age: 18})

        // getter()返回的是一个普通对象
        // 本例中return {...info}返回的是info的浅拷贝 也就是按照info当前的属性名和属性值创建的一个普通对象
        watch(() => {return {...info}}, (newValue, oldValue) => {
            console.log('newValue: ', newValue)     // 打印的是普通对象
            console.log('oldValue: ', oldValue)     // 打印的是普通对象
        })

        const changeName = () => {
            info.name = 'kobe'
        }

        return {
            info,
            changeName
        }
    },
}
</script>
```