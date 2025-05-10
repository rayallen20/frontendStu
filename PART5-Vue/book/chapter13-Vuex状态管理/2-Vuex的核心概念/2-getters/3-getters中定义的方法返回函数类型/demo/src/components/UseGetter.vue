<template>
    <div class="use-getter"></div>
    <h4>书籍总价: {{$store.getters.totalPrice}}</h4>
    <!--
    $store.getters.totalPriceByName 相当于拿到了返回的函数
    $store.getters.totalPriceByName('Vue.js') 则是调用了这个函数并传递了参数
    -->
    <h4>vue.js总价: {{$store.getters.totalPriceByName('Vue.js')}}</h4>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: 'UseGetter',
})
</script>