# 3-defineExpose

- `defineExpose()`: 是Vue3中的一个API,用于在 `<script setup>`中暴露组件的属性和方法,以便在其他组件中访问它们

- `components/DefineExposeApi.vue`:

```vue
<template>
    <div class="define-expose-api"></div>
</template>

<script setup>
import {ref} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'DefineExposeApi'
})

const age = 18
const name = ref('coderWhy')
const showMessage = () => {
    console.log('DefineExposeApi组件的showMessage方法')
}

// eslint-disable-next-line
defineExpose({
    age,
    name,
    showMessage
})
</script>

<style scoped>

</style>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        App组件
        <DefineExposeApi ref="defineExposeApi"></DefineExposeApi>
    </div>
</template>

<script setup>
import DefineExposeApi from "@/components/DefineExposeApi.vue";
import {ref, watchPostEffect} from "vue";

const defineExposeApi = ref(null)

watchPostEffect(() => {
    // 组件实例
    console.log(defineExposeApi.value)

    // 组件暴露的属性
    console.log(defineExposeApi.value.age)
    console.log(defineExposeApi.value.name)

    // 调用组件暴露的方法
    defineExposeApi.value.showMessage()
})
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>
```