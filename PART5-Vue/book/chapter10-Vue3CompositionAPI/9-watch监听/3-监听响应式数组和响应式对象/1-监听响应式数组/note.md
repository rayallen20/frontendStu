# 1-监听响应式数组

- 监听响应式数组时,直接监听响应式数组无法获取旧值:

```vue
<template>
    <div class="watch-api">
        <h4 v-for="(name, index) in names" :key="index">{{name}}</h4>
        <button @click="changeNames">修改数据</button>
    </div>
</template>

<script>
import {reactive, watch} from "vue";

export default {
    name: 'WatchApiDeep',
    setup() {
        const names = reactive(['abc', 'cba', 'nba'])

        // 监听响应式数组时 直接监听响应式对象无法获取旧值
        watch(names, (newValue, oldValue) => {
            console.log(newValue)                   // Proxy(Array)
            console.log(oldValue)                   // Proxy(Array)
            console.log(newValue === oldValue)      // true
        }, {
            deep: true
        })

        const changeNames = () => {
            names.push('kobe')
        }

        return {
            names,
            changeNames
        }
    },
}
</script>
```

- 原因: 
  - `watch()`函数在监听响应式数组或对象时,`oldValue`和`newValue`实际上是同一个引用
  - 当数组或对象发生变化时,Vue并不会保留旧的快照,而是直接修改原始数据,因此`oldValue`和`newValue`都指向同一个内存地址,导致它们的值相同
- 解决方案: 监听响应式数组的浅拷贝

```vue
<template>
    <div class="watch-api">
        <h4 v-for="(name, index) in names" :key="index">{{name}}</h4>
        <button @click="changeNames">修改数据</button>
    </div>
</template>

<script>
import {reactive, watch} from "vue";

export default {
    name: 'WatchApiDeep',
    setup() {
        const names = reactive(['abc', 'cba', 'nba'])

        // 解决方法: 监听响应式数组的浅拷贝
        watch(() => [...names], (newValue, oldValue) => {
            console.log(newValue)                   // Array(4)
            console.log(oldValue)                   // Array(3)
            console.log(newValue === oldValue)      // false
        }, {
            deep: true
        })

        const changeNames = () => {
            names.push('kobe')
        }

        return {
            names,
            changeNames
        }
    },
}
</script>
```