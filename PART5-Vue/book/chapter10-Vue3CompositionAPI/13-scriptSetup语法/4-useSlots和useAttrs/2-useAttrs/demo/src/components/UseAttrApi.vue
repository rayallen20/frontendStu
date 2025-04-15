<template>
    <div class="use-attr-api">
        {{message}}
    </div>
</template>

<script setup>
import {useAttrs} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'UseAttrApi'
})

// eslint-disable-next-line
defineProps({
    message: {
        type: String,
        default: 'hello'
    }
})

const attrs = useAttrs()
console.log(attrs.foo)
console.log(attrs.bar)
</script>

<style scoped>

</style>