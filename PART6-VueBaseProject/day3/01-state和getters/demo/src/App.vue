<template>
    <div class="app">
        书籍总价: {{storeGetters.totalPrice}}
        <br>
        折扣: {{storeGetters.discount}}
    </div>
</template>

<script setup>
import {useGetter} from "@/hooks/useGetter"

// eslint-disable-next-line
defineOptions({
    name: 'App'
})

const getterMapper = {
    totalPrice: 'totalPrice',
    discount: 'currentDiscount',
}

const storeGetters = useGetter(getterMapper)
</script>

<style>

</style>
