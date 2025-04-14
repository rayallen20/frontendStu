<template>
    <div class="to-refs-api">
        <h4>{{name}} - {{age}}</h4>
        <button @click="changeAge">age+1</button>
    </div>
</template>

<script>
import {reactive, toRef} from "vue"

export default {
    name: "ToRefApi",
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