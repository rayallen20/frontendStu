# 2-toRef

- `toRef()`函数:将值/refs/getters规范化为refs
- 也可以基于响应式对象上的一个属性,创建一个对应的ref
  - 这样创建的ref和源属性保持同步,即:改变源属性的值将更新ref的值,反之亦然

- `ToRefApi.vue`:

```vue
<template>
    <div class="to-refs-api">
        <h4>{{name}} - {{age}}</h4>
        <button @click="changeAge">age+1</button>
    </div>
</template>

<script>
import {reactive, toRef} from "vue"

export default {
    name: "ToRefsApi",
    setup() {
        const info = reactive({name: 'why', age: 18})
        let age = toRef(info.age)
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