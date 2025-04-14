# 3-watch监听ref创建的响应式对象

```vue
<template>
    <div class="watch-api">
        <h4>{{name}}</h4>
        <button @click="changeName">修改数据</button>
    </div>
</template>

<script>
import {ref, watch} from "vue";

export default {
    name: 'WatchApi',
    setup() {
        const name = ref('coderWhy')

        watch(name, (newValue, oldValue) => {
            console.log(typeof newValue)       // 打印的是字符串类型
            console.log(newValue)
            console.log(typeof oldValue)       // 打印的是字符串类型
            console.log(oldValue)
        })

        const changeName = () => {
            name.value = 'kobe'
        }

        return {
            name,
            changeName
        }
    },
}
</script>
```