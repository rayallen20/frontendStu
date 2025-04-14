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