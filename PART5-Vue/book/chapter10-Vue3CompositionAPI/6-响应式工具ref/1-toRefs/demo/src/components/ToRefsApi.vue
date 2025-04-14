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