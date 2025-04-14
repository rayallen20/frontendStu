# 1-toRefs

- `toRefs()`函数: 将一个`reactive()`函数创建的对象转换为一个普通对象,该普通对象的每个属性都是指向源对象相应属性的ref
- 该对象的每个属性都是一个`ref()`函数创建的对象(换言之该对象的每个属性都是响应式数据)

- `ToRefsApi.vue`:

```vue
<template>
    <div class="to-refs-api">
        <h4>{{name}} - {{age}}</h4>
        <button @click="changeAge">age+1</button>
    </div>
</template>

<script>
import {reactive} from "vue"

export default {
    name: "ToRefsApi",
    setup() {
        const info = reactive({name: 'why', age: 18})
        let {name, age} = info

        const changeAge = () => {
            info.age++
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

- 此时`setup()`函数和模板中使用的都是解构出的`age`属性
- `info`对象的`age`属性发生变化时,模板中的`age`属性不会自动更新
- 原因: 解构赋值会导致`age`属性失去响应式特性
- 若想要解构出来的属性依然保持响应式,使用`toRefs()`函数即可:

```vue
<template>
    <div class="to-refs-api">
        <h4>{{name}} - {{age}}</h4>
        <button @click="changeAge">age+1</button>
    </div>
</template>

<script>
import {reactive, toRefs} from "vue"

export default {
    name: "ToRefsApi",
    setup() {
        const info = reactive({name: 'why', age: 18})
        let {name, age} = toRefs(info)

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