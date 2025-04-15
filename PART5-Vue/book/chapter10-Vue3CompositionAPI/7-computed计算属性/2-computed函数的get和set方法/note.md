# 2-computed函数的get和set方法

- `computed()`函数接收一个带有`get()`和`set()`函数的对象来创建一个可写的`ref`对象

```vue
<template>
    <div class="computed-api">
        <h4>{{fullName}}</h4>
        <button @click="changeName">修改fullName</button>
        <br>
        修改fullName: <input type="text" v-model.lazy="fullName" />
    </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
    name: "ComputedApi",
    setup() {
        const firstName = ref('kobe')
        const lastName = ref('bryant')

        // computed接收一个带有get()和set()方法的对象 返回一个可写的ref对象
        const fullName = computed({
            get() {
                return firstName.value + ' ' + lastName.value
            },
            set(newName) {
                const names = newName.split(' ')
                firstName.value = names[0]
                lastName.value = names[1]
            }
        })

        const changeName = () => {
            fullName.value = 'james harden'
        }

        return {
            fullName,
            changeName,
        }
    },
}
</script>
```