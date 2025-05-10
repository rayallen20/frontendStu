<template>
    <div class="use-getter"></div>
    <h4>书籍总价: {{$store.getters.totalPrice}}</h4>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: 'UseGetter',
})
</script>