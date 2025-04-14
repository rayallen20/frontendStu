# 2-监听多个数据源

- `watch()`函数通过接收数组的方式,可以同时监听多个数据源

```vue
<template>
    <div class="watch-api">
        <h4>{{info.name}}-{{name}}</h4>
        <h4>{{age}}</h4>
        <button @click="changeData">修改数据</button>
    </div>
</template>

<script>
import {reactive, ref, watch} from "vue";

export default {
    name: 'WatchApiMulti',
    setup() {
        const info = reactive({name: 'coderWhy', age: 18})
        const name = ref('why')
        const age = ref(20)

        watch([
            // getter函数形式
            () => ({...info}),
            // ref形式
            name,
            age,
        ], ([newInfo, newName, newAge], [oldInfo, oldName, oldAge]) => {
            console.log(newInfo)
            console.log(oldInfo)

            console.log('-------------------------------------------')

            console.log(newName)        // 解包后的value
            console.log(oldName)        // 解包后的value

            console.log('-------------------------------------------')
            
            console.log(newAge)         // 解包后的value
            console.log(oldAge)         // 解包后的value
        })

        const changeData = () => {
            info.name = 'kobe'
            name.value = 'jack'
            age.value = 30
        }

        return {
            info,
            name,
            age,
            changeData
        }
    },
}
</script>
```

- 注意: 
  - 若在第1个参数的位置直接写一个`ref`对象,则在副作用函数中可以直接拿到解包后的`.value`
  - 若以`getter`函数的形式传入,则在副作用函数中需要解包