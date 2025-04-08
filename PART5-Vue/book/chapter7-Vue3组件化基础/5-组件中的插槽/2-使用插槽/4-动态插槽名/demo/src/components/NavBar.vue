<template>
    <div class="nav-bar">
        <div class="left">
            <!-- 绑定来自props的属性值作为插槽名 -->
            <slot :name="leftSlotName"></slot>
        </div>

        <div class="center">
            <!-- 绑定来自props的属性值作为插槽名 -->
            <slot :name="centerSlotName"></slot>
        </div>

        <div class="right">
            <!-- 绑定来自props的属性值作为插槽名 -->
            <slot :name="rightSlotName"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        leftSlotName: {
            type: String,
            required: true,
            default: 'left'
        },
        centerSlotName: {
            type: String,
            required: true,
            default: 'center'
        },
        rightSlotName: {
            type: String,
            required: true,
            default: 'right'
        }
    },
}
</script>

<style scoped>
.nav-bar {
    display: flex;
}
.left, .right, .center {
    height: 44px;
    border: 1px solid #999;
    display: flex;
    justify-content: center;
    align-content: center;
}
.center {
    flex: 1;
}
</style>