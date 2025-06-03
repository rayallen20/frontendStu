<template>
  <div class="app-container">
      <!-- Header区域 -->
      <CartHeader></CartHeader>

      <!-- Item区域 -->
      <CartItem
          v-for="item in $store.state.cart.list"
          :key="item.id"
          :id="item.id"
          :count="item.count"
          :img="item.img"
          :name="item.name"
          :price="item.price"
      ></CartItem>

      <!-- Footer区域 -->
      <CartFooter></CartFooter>
  </div>
</template>

<script setup>
import CartHeader from "@/components/CartHeader.vue"
import CartItem from "@/components/CartItem.vue";
import CartFooter from "@/components/CartFooter.vue";
import {useStore} from "vuex";

// eslint-disable-next-line
defineOptions({
    name: 'App',
})

const store = useStore()
store.dispatch('cart/getList')
</script>

<style lang="less" scoped>
.app-container {
    padding: 50px 0;
    font-size: 14px;
}
</style>
