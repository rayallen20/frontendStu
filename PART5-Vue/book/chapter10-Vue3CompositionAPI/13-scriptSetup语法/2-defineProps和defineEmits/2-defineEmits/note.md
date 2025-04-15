# 2-defineEmits

- `components/DefineEmitsApi.vue`:

```vue
<template>
    <div class="define-emits-api">
        DefineEmitsApi组件
        <button @click="emitEvent">触发自定义事件</button>
    </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: 'DefineEmitsApi',
})

// eslint-disable-next-line
const emits = defineEmits({
    increment: (num) => {
        if (num < 0) {
            console.warn('num 不能小于0')
            return false
        }

        return true
    }
})

const emitEvent = () => {
    emits('increment', 2)
}
</script>

<style scoped>

</style>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        App组件
        <p>当前计数：{{ counter }}</p>
        <DefineEmitsApi @increment="incrementCounter"></DefineEmitsApi>
    </div>
</template>

<script setup>
import DefineEmitsApi from "@/components/DefineEmitsApi.vue";
import {ref} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'App'
})

const counter = ref(0)
const incrementCounter = (num) => {
    counter.value = counter.value + num
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>
```