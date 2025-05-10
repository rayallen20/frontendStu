# 4-`mapGetters()`辅助函数在OptionsAPI中的使用

- `mapGetters()`辅助函数和`mapState()`函数相同,通常在`computed`属性中使用

- `src/components/UseMapGetters.vue`:

```vue
<template>
    <div class="use-map-getters"></div>
    <h4>书籍总价: {{$store.getters.totalPrice}}</h4>
    <h4>vue.js总价: {{$store.getters.totalPriceByName('Vue.js')}}</h4>
    <h4>书籍总价: {{totalPrice}}</h4>
    <h4>书籍折扣: {{discount}}</h4>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    name: 'UseMapGetters',
    computed: {
        // 解构赋值 + mapGetters接收数组的用法
        ...mapGetters(['totalPrice']),
        // 解构赋值 + mapGetters接收对象的用法
        ...mapGetters({
            discount: 'currentDiscount',
        }),
    }
}
</script>
```