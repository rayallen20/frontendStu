<template>
    <div class="readonly-api">
    </div>
</template>

<script>
import {reactive, toRaw} from "vue"

export default {
    name: "ToRawApi",
    setup() {
        const info = {
            name: 'kobe',
        }

        const reactiveInfo = reactive(info)
        const rawInfo = toRaw(reactiveInfo)
        console.log(rawInfo === info)
    },
}
</script>