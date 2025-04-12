<template>
    <div class="readonly-api">
        <button @click="updateState">修改readonly数据</button>
    </div>
</template>

<script>
import {reactive, readonly, ref} from "vue";

export default {
    name: "ReadonlyApi",
    setup() {
        const info1 = {name: 'why'}
        const readonlyInfo1 = readonly(info1)

        const info2 = reactive({name: 'why'})
        const readonlyInfo2 = readonly(info2)

        const info3 = ref('why')
        const readonlyInfo3 = readonly(info3)

        const updateState = () => {
            readonlyInfo1.name = 'coderWhy' // reactivity.esm-bundler.js:101 [Vue warn] Set operation on key "name" failed: target is readonly.
            info1.name = 'coderWhy'
            console.log(readonlyInfo1)      // 修改原始对象的值,readonly()函数返回的对象也会跟着变化

            readonlyInfo2.name = 'coderWhy' // reactivity.esm-bundler.js:101 [Vue warn] Set operation on key "name" failed: target is readonly.
            info2.name = 'coderWhy'
            console.log(readonlyInfo2)      // 修改原始对象的值,readonly()函数返回的对象也会跟着变化

            readonlyInfo3.value = 'coderWhy' // [Vue warn] Set operation on key "value" failed: target is readonly
            info3.value = 'coderWhy'         // 修改原始对象的值,readonly()函数返回的对象也会跟着变化
            console.log(readonlyInfo3)
        }

        return {
            updateState
        }
    },
}
</script>