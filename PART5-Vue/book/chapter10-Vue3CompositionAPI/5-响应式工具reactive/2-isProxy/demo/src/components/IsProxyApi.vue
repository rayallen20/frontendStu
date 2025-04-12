<template>
    <div class="readonly-api">
    </div>
</template>

<script>
import {isProxy, reactive, readonly, ref} from "vue"

export default {
    name: "IsProxyApi",
    setup() {
        const state = reactive({
            name: 'Kobe',
        })
        console.log(isProxy(state))

        const readonlyState = readonly(state)
        console.log(isProxy(readonlyState))

        const refState = ref('Kobe')
        console.log(isProxy(refState))      // false,isProxy()函数只会对reactive()函数和readonly()函数创建的对象返回true
    },
}
</script>