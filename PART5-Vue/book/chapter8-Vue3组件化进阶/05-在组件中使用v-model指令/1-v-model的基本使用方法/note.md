# 1-v-model的基本使用方法

- 子组件`HyInput.vue`:

```vue
<template>
    <div class="hy-input">
        HyInput组件:
        <!--
        这里的:value="modelValue" 不能简写为 v-model="modelValue"
        因为modelValue是props传入的变量 子组件中是无法修改来自父组件传递的props的
        -->
        <input :value="modelValue" @input="inputClick">
    </div>
</template>

<script>
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
    methods: {
        inputClick(event) {
            this.$emit('update:model-value', event.target.value)
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

- 父组件`App.vue`:

```vue
<template>
    <div class="app">
        <h4>App组件的message变量:{{message}}</h4>
        <!--
        <HyInput :modelValue="message"
        @update:model-value="message = $event"></HyInput>
        -->
        <!-- 两种写法等价 -->
        <HyInput v-model="message"></HyInput>
    </div>
</template>

<script>
import HyInput from "@/components/HyInput.vue"

export default {
    name: 'App',
    data() {
        return {
            message: 'hello world',
        }
    },
    components: {
        HyInput,
    },
    methods: {
        changeMessage() {
            this.message = 'coderWhy'
        }
    }
}
</script>
```

- 思路:
  - 父组件通过props传递数据给子组件
  - 子组件通过自定义事件将修改后的props值传递给父组件,父组件监听自定义事件,完成修改