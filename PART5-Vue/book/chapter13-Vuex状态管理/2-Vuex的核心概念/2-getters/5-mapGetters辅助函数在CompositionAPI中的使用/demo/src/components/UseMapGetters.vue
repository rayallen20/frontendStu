<template>
    <div class="use-map-getters"></div>
    <h4>书籍总价: {{$store.getters.totalPrice}}</h4>
    <h4>vue.js总价: {{$store.getters.totalPriceByName('Vue.js')}}</h4>
    <h4>书籍总价: {{totalPrice}}</h4>
    <h4>书籍折扣: {{discount}}</h4>
</template>

<script setup>
import {useGetters} from "@/hooks"

// eslint-disable-next-line
defineOptions({
    name: 'UseMapGetters'
})

const {totalPrice, discount} = useGetters({
    totalPrice: 'totalPrice',
    discount: 'currentDiscount'
})
</script>