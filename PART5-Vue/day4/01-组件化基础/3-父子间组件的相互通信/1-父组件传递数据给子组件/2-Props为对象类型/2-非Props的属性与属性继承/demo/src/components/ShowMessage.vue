<template>
    <div class="show-message">该子组件没有定义任何props属性</div>
    <div class="show-message">该子组件没有定义任何props属性</div>
    <div class="show-message" :class="$attrs.class">该子组件没有定义任何props属性</div>
</template>

<script>
export default {
    name: 'ShowMessage',
}
</script>
