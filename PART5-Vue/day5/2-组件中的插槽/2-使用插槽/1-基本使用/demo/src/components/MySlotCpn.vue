<template>
    <div class="my-slot-cpn">
        <div class="header">header</div>
        <!--中间要显示的内容不确定 使用插槽占位-->
        <!-- <slot></slot> 是 <slot name="default"></slot>的缩写 -->
        <slot></slot>
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