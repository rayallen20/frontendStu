<template>
    <div class="hy-form">
        HyForm组件:
        <input :value="modelValue.name" @input="inputChange($event, 'name')" />
        <input :value="modelValue.title" @input="inputChange($event, 'title')" />
    </div>
</template>

<script>
export default {
    name: 'HyForm',
    props: {
        modelValue: {
            type: Object,
            validator(value) {
                if (!Object.prototype.hasOwnProperty.call(value, 'name')) {
                    console.error('HyForm组件的value属性必须是一个对象，并且包含name属性')
                    return false
                }

                if (!Object.prototype.hasOwnProperty.call(value, 'title')) {
                    console.error('HyForm组件的value属性必须是一个对象，并且包含title属性')
                    return false
                }

                return true
            }
        }
    },
    emits: {
        'update:model-value': null,
    },
    methods: {
        inputChange(event, field) {
            this.$emit('update:model-value', {
                ...this.modelValue,
                // [field]: ES6的计算属性名(不是Vue的语法)
                // 类似于PHP中的可变变量 [field]表示变量field的值
                // 放在这里就是: 用变量field的值作为该对象的key
                [field]: event.target.value
            })
        }
    }
}
</script>