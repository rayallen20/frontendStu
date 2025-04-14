# 2-监听响应式对象

- 监听响应式对象时,浅拷贝对象仍然会出现问题:

```vue
<template>
    <div class="watch-api">
        <h4>{{info.friend.name}}</h4>
        <button @click="changeData">修改数据</button>
    </div>
</template>

<script>
import {reactive, watch} from "vue";

export default {
    name: 'WatchApiDeep',
    setup() {
        const info = reactive({
            name: 'coderWhy',
            age: 18,
            friend: {
                name: 'kobe',
            }
        })

        watch(() => ({...info}), (newValue, oldValue) => {
            console.log(newValue)
            console.log(oldValue)
            console.log(newValue === oldValue)      // 字面量全部相同(即所有字段都相等),但全等判断结果为false
        }, {
            deep: true
        })

        const changeData = () => {
            info.friend.name = 'james'
        }

        return {
            info,
            changeData
        }
    },
}
</script>
```

- 原因: 使用展开运算符进行的浅拷贝只会复制对象的第一层属性,对于嵌套的对象,复制的只是引用,而非创建一个新的对象
- 解决方法: 使用`lodash`库的`cloneDeep()`函数进行深拷贝,或者使用`JSON.parse(JSON.stringify())`进行深拷贝
  - 此处演示使用`lodash`库的`cloneDeep()`函数进行深拷贝

```vue
<template>
    <div class="watch-api">
        <h4>{{info.friend.name}}</h4>
        <button @click="changeData">修改数据</button>
    </div>
</template>

<script>
import {reactive, watch} from "vue"
import cloneDeep from "lodash/cloneDeep"

export default {
    name: 'WatchApiDeep',
    setup() {
        const info = reactive({
            name: 'coderWhy',
            age: 18,
            friend: {
                name: 'kobe',
            }
        })

        // 使用深拷贝创建一个新的对象
        watch(() => (cloneDeep(info)), (newValue, oldValue) => {
            console.log(newValue)                   // {name: 'coderWhy', age: 18, friend: {name: 'james'}}
            console.log(oldValue)                   // {name: 'coderWhy', age: 18, friend: {name: 'kobe'}}
            console.log(newValue === oldValue)      // false
        }, {
            deep: true
        })

        const changeData = () => {
            info.friend.name = 'james'
        }

        return {
            info,
            changeData
        }
    },
}
</script>
```