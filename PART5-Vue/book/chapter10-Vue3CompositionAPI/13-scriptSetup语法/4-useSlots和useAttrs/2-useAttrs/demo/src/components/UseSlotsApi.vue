<template>
    <div class="use-slots-api">
        <slot name="content"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script setup>
import {useSlots} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'UseSlotsApi',
})

const slots = useSlots()
console.log(slots.content)
console.log(slots.footer)
</script>

<style scoped>

</style>