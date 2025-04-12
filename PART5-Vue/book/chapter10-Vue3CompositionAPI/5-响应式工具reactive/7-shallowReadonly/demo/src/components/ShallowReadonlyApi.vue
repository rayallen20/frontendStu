<template>
    <div class="readonly-api">
        <h4>根级别属性: {{state.counter}}</h4>
        <h4>嵌套属性: {{state.deep.counter}}</h4>

        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {isReactive, shallowReadonly} from "vue"

export default {
    name: "ShallowReadonlyApi",
    setup() {
        const state = shallowReadonly({
            counter: 1,
            deep: {
                counter: 5.
            }
        })

        console.log(isReactive(state.deep))

        const increment = () => {
            state.counter++
            state.deep.counter++
            console.log(state.deep.counter)
        }

        return {
            state,
            increment,
        }
    },
}
</script>