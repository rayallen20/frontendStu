<template>
    <div class="to-refs-api">
        UnRefApi组件
    </div>
</template>

<script>

import {reactive, ref, unref} from "vue";

export default {
    name: "UnRefApi",
    setup() {
        const name = ref('why')
        const unwrappedName = unref(name)
        console.log(unwrappedName)      // 打印的是字符串why 而非响应式对象

        const info = reactive({name: 'why'})
        const unwrappedInfo = unref(info)
        console.log(unwrappedInfo)      // 打印的是响应式对象
    },
}
</script>