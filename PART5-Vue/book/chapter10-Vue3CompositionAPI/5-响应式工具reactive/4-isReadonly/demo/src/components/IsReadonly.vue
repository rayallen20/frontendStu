<template>
    <div class="readonly-api">
    </div>
</template>

<script>
import {isReadonly, readonly} from "vue"

export default {
    name: "IsReadonly",
    setup() {
        const state = readonly({
            name: 'Kobe',
        })
        console.log(isReadonly(state))
    },
}
</script>