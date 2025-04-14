# 7-triggerRef

- `triggerRef()`函数: 强制触发依赖于一个浅层ref的副作用,这通常在对浅引用的内部值进行深度变更后使用

- 上个例子中,若想修改`value.age`后触发视图更新(也就是说从效果上将`value.age`设置为一个响应式对象),可以使用`triggerRef()`函数

```vue
<template>
    <div class="to-refs-api">
        <h4>{{info.name}}-{{info.age}}</h4>

        <button @click="changeAge">age+1</button>
        <button @click="changeName">name=kobe</button>
    </div>
</template>

<script>
import {shallowRef, triggerRef} from "vue"

export default {
    name: "TriggerRefApi",
    setup() {
        const info = shallowRef({name: 'why', age: 18})

        const changeAge = () => {
            info.value.age++
            console.log(info.value.age)

            // 通过手动触发 实现响应式
            triggerRef(info)
        }

        const changeName = () => {
            info.value = {
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