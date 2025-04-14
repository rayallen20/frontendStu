# 1-watch函数监听getter函数

- `watch()`函数:
  - 第1个参数是一个`getter()`函数,该函数必须引用一个响应式对象
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

        // 第1个参数是getter()函数 要求该函数引用一个响应式对象
        // 第2个参数是回调函数 即副作用函数
        watch(() => info.name, (newValue, oldValue) => {
            console.log('newValue: ', newValue)
            console.log('oldValue: ', oldValue)
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