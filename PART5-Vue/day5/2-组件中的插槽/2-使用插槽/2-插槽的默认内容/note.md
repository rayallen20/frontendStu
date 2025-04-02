# 2-插槽的默认内容

- 当没有提供插入的内容时,可以使用插槽的默认内容

- `MySlotCpn.vue`:

```vue
<template>
    <div class="my-slot-cpn">
        <div class="header">header</div>
        <slot>
            <!-- 定义插槽的默认内容 -->
            插槽的默认内容,仅当没有提供插入的内容时,才会显示
        </slot>
        <div class="footer">footer</div>
    </div>
</template>

<script>
export default {
    name: 'MySlotCpn'
}
</script>

<style scoped>
.my-slot-cpn {
    border: 1px solid #999;
    margin: 10px 5px;
}
</style>
```