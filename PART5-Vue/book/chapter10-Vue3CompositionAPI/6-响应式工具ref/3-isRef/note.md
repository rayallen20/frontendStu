# 3-isRef

- `isRef()`函数: 用于判断一个值是否是一个ref对象

```vue
<template>
    <div class="to-refs-api">
        <h4>{{name}} - {{age}}</h4>
        <button @click="changeAge">age+1</button>
    </div>
</template>

<script>
import {isRef, reactive, toRef} from "vue"

export default {
    name: "IsRefApi",
    setup() {
        const info = reactive({name: 'why', age: 18})
        console.log(isRef(info))        // false

        let age = toRef(info.age)
        console.log(isRef(age))         // true

        let name = toRef(info, 'name')

        const changeAge = () => {
            age.value++
            console.log(info.age)
        }

        return {
            name,
            age,
            changeAge
        }
    },
}
</script>
```