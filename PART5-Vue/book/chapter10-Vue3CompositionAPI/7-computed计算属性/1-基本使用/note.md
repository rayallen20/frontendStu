# 1-基本使用

- `computed()`函数接收一个`getter()`函数,返回一个只读的响应式`ref`对象.该`ref`对象通过`value`属性暴露`getter()`函数的返回值

```vue
<template>
    <div class="computed-api">
        <h4>{{fullName}}</h4>
        <button @click="changeName">修改firstName和lastName</button>
    </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
    name: "ComputedApi",
    setup() {
        const firstName = ref('kobe')
        const lastName = ref('bryant')

        // computed接收一个getter函数作为参数 根据该getter函数的返回值 返回一个不可变的ref对象
        const fullName = computed(() => firstName.value + ' ' + lastName.value)

        const changeName = () => {
            firstName.value = 'james'
            lastName.value = 'harden'
        }

        return {
            fullName,
            changeName,
        }
    },
}
</script>
```