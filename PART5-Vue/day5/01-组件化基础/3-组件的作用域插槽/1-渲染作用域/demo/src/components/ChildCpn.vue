<template>
    <div class="child-cpn">
        <h4>{{title}}</h4>
        <slot name="row"></slot>
    </div>
</template>

<script>
export default {
    name: 'ChildCpn',
    data() {
        return {
            title: '子组件中定义的标题'
        }
    },
}
</script>