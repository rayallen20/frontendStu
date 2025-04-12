<template>
    <div class="setup-props">
        SetupProps组件
        <h4>{{message}}</h4>
    </div>
</template>

<script>
export default {
    name: 'SetupProps',
    props: {
        message: {
            type: String,
            required: true,
        }
    },
    setup(props, context) {
        console.log(props)
        console.log(context.attrs.id, context.attrs.class)
    },
}
</script>