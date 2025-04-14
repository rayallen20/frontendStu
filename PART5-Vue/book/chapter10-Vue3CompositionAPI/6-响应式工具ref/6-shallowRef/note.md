# 6-shallowRef

- `shallowRef()`函数: 创建一个浅层的`ref`对象
  - 注意: 这里所谓的浅层,是指`shallowRef()`函数创建的对象是响应式的,但该对象的属性(例如`value`)不是响应式的

```vue
<template>
    <div class="to-refs-api">
        <h4>{{info.name}}-{{info.age}}</h4>

        <button @click="changeAge">age+1</button>
        <button @click="changeName">name=kobe</button>
    </div>
</template>

<script>
import {shallowRef} from "vue"

export default {
    name: "ShallowRefApi",
    setup() {
        const info = shallowRef({name: 'why', age: 18})

        const changeAge = () => {
            info.value.age++            // info.value是一个普通对象 不是响应式对象 因此直接修改value的属性不会触发视图更新
            console.log(info.value.age)
        }

        const changeName = () => {
            info.value = {              // 但info是响应式对象 修改其属性会触发视图更新
                name: 'kobe',
                age: info.value.age
            }
        }

        return {
            info,
            changeAge,
            changeName
        }
    },
}
</script>
```