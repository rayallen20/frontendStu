# 4-v-model绑定对象类型

- `HyForm.vue`:

```vue
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
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <h4>App组件的formData.name:{{formData.name}}</h4>
        <h4>App组件的formData.title:{{formData.title}}</h4>
        <!--二者等价-->
        <HyForm v-model:model-value="formData"></HyForm>
        <!--
        <HyForm
        :model-value="formData"
        @update:model-value="updateModelValue"
        ></HyForm>
        -->
    </div>
</template>

<script>
import HyForm from "@/components/HyForm.vue"

export default {
    name: 'App',
    data() {
        return {
            formData: {
                name: 'coder',
                title: 'why',
            }
        }
    },
    components: {
        HyForm,
    },
    methods: {
        updateModelValue(value) {
            this.formData.name = value.name
            this.formData.title = value.title
        }
    }
}
</script>
```