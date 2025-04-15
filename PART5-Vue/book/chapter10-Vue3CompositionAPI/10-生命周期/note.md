# 10-生命周期

- Composition API没有提供`beforeCreate()`和`created()`这两个生命周期钩子函数
  - 因为在Composition API中,这两个函数被`setup()`函数替代了
  - `setup()`函数在`beforeCreate()`之前执行
  - 因为`setup()`函数是围绕`beforeCreate()`和`created()`生命周期钩子运行的,所以不需要显式地定义它们
  - 换言之,所有写在`beforeCreate()`和`created()`中的代码,都应该直接写在`setup()`函数中

![生命周期图示](./img/生命周期图示.png)

|   Options API   |  Composition API  |
|:---------------:|:-----------------:|
| `beforeCreated` |         无         |
|    `created`    |         无         |
|  `beforeMount`  |  `onBeforeMount`  |
|    `mounted`    |    `onMounted`    |
| `beforeUpdate`  | `onBeforeUpdate`  |
|    `updated`    |    `onUpdated`    |
| `beforeUnmount` | `onBeforeUnmount` |
|   `unmounted`   |   `onUnmounted`   |
|   `activated`   |   `onActivated`   |
|  `deactivated`  |  `onDeactivated`  |

```vue
<template>
    <div class="app">
        <h4>{{counter}}</h4>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {onMounted, onUnmounted, onUpdated, ref} from "vue";

export default {
    name: 'App',
    setup() {
        const counter = ref(0)
        const increment = () => counter.value++

        // 生命周期函数(同一个生命周期函数可以有多个)
        onMounted(() => {
            console.log('onMounted1')
        })

        onMounted(() => {
            console.log('onMounted2')
        })

        onUpdated(() => {
            console.log('onUpdated')
        })

        onUnmounted(() => {
            console.log('onUnmounted')
        })

        return {
            counter,
            increment,
        }
    },
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>
```