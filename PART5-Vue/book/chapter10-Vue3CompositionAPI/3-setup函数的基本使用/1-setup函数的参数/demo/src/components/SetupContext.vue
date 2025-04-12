<template>
    <div class="setup-props">
        SetupProps组件
        <h4>{{message}}</h4>
        <slot name="content"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: 'SetupContext',
    props: {
        message: {
            type: String,
            required: true,
        }
    },
    setup(props, context) {
        // props是第1个参数 不使用会报错 故打印
        console.log(props)

        // 父组件传递的非props属性
        console.log(context.attrs.id, context.attrs.class)

        // 父组件传递的插槽
        console.log(context.slots)

        // emit事件
        context.emit('update:message', '修改后的props值')
    },
    emits: {
        'update:message': null,
    }
}
</script>