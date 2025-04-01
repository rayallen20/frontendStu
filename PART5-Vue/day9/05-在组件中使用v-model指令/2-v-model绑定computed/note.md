# 2-v-model绑定computed

在刚才的案例中,`<input :value="modelValue" @input="inputClick">`不能简写为`<input v-model="modelValue">`

因为`modelValue`是一个props,子组件是不能修改来自父组件的props的(如果加载了ESLint,则`<input v-model="modelValue">`的写法会直接报错)

此时,如果还想使用`v-model`的话,可以绑定一个计算属性:

- `HyInput.vue`:

```vue
<template>
    <div class="hy-input">
        HyInput组件:
        <input v-model="value">
    </div>
</template>

<script>``
export default {
    name: 'HyInput',
    props: {
        modelValue: {
            type: String,
        }
    },
    emits: {
        'update:model-value': null,
    },
    computed: {
        value: {
            set(val) {
                this.$emit('update:model-value', val)
            },
            get() {
                return this.modelValue
            }
        }
    }
}
</script>

<style scoped>
.hy-input{
    border: 1px solid #999;
    margin: 15px;
    padding: 5px;
}
</style>
```

- 这个思路依然可以实现父子组件之间的双向数据绑定