<template>
    <div class="readonly-api">
    </div>
</template>

<script>
import {isProxy, isReactive, reactive, readonly} from "vue"

export default {
    name: "IsReactiveApi",
    setup() {
        const state = reactive({
            name: 'Kobe',
        })
        console.log(isProxy(state))
        console.log(isReactive(state))

        const readonlyState = readonly(state)
        console.log(isProxy(readonlyState))
        console.log(isReactive(readonlyState))      // 若readonly()创建的对象时,使用的是reactive()创建的对象,则isReactive()返回true
    },
}
</script>