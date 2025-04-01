# 3-组件上应用多个v-model

- `HyMultipleInput.vue`:

```vue
<template>
    <div class="hy-multiple-input">
        HyMultipleInput组件:
        <input :value="modelValue" @input="input1Change">
        <input :value="title" @input="input2Change">
    </div>
</template>

<script>
export default {
    name: 'HyMultipleInput',
    props: {
        modelValue: {
            type: String,
        },
        title: {
            type: String,
        }
    },
    emits: {
        'update:model-value': null,
        'update:title': null
    },
    methods: {
        input1Change(event) {
            this.$emit('update:model-value', event.target.value)
        },
        input2Change(event) {
            this.$emit('update:title', event.target.value)
        }
    }
}
</script>

<style scoped>
.hy-multiple-input{
    border: 1px solid #999;
    margin: 15px;
    padding: 5px;
}
</style>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <h4>App组件的message变量:{{message}}</h4>
        <h4>App组件的title变量:{{title}}</h4>
        <!--
        需要双向数据绑定多个props时 使用 v-model:propsName="propsValue"的写法
        -->
        <HyMultipleInput
            v-model:model-value="message"
            v-model:title="title"
        ></HyMultipleInput>
    </div>
</template>

<script>
import HyMultipleInput from "@/components/HyMultipleInput.vue";

export default {
    name: 'App',
    data() {
        return {
            message: 'Hello',
            title: 'World',
        }
    },
    components: {
        HyMultipleInput,
    },
}
</script>
```

- 需要在父子组件之间双向数据绑定多个props时,使用`v-model:propsName="propsValue"`的写法