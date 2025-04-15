# 1-defineProps

- `components/DefinePropsApi.vue`:

```vue
<template>
    <div class="define-props-api">
        DefinePropsApi组件
        <p>{{message}}</p>
    </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: 'DefinePropsApi'
})

// 定义props 等同于Options API中的props
// eslint-disable-next-line
const props = defineProps({
    message: {
        type: String,
        required: true,
        validator(value) {
            if (value.length < 5) {
                console.warn('message的长度不能小于5')
                return false
            }

            return true
        }
    }
})
</script>

<style scoped>
.define-props-api {
    border: 1px solid #dddddd;
    margin: 8px;
}
</style>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        App组件
        <DefinePropsApi :message="message"></DefinePropsApi>
    </div>
</template>

<script setup>
import DefinePropsApi from "@/components/DefinePropsApi.vue";
import {ref} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'App'
})

const message = ref('App组件传递给DefinePropsApi组件的message属性')
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>
```