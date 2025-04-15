# 1-基本使用

- `<script setup>`中的代码会被编译成组件`setup()`函数的内容
- `<script>`中的代码只在组件被首次引入时执行1次,而`<script setup>`中的代码会在每次组件实例被创建时执行
- 任何在`<script setup>`中声明的顶层绑定(变量/函数声明/`import`)都可以在模板中直接使用

- `components/ScriptSetupExample.vue`:

```vue
<template>
    <div class="script-setup-example">
        <h4>当前计数: {{counter}}</h4>
        <button @click="increment">+1</button>
    </div>
</template>

<script setup>
import {ref} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'ScriptSetupExample'
})

const counter = ref(0)

const increment = () => counter.value++
</script>

<style scoped>

</style>
```

- 注: 此处的`defineOptions()`函数是`vue`的一个API,用于定义组件的选项,如名称/props/emits等.它在`<script setup>`中是可选的,如果不使用,Vue会自动推断组件名称为文件名(去掉扩展名)
- 注: 此处加了`// eslint-disable-next-line`是为了避免ESLint报错,因为`defineOptions()`函数是Vue3内置API,不需要单独引入

```vue
<template>
    <div class="app">
        App组件
        <ScriptSetupExample></ScriptSetupExample>
    </div>
</template>

<script setup>
import ScriptSetupExample from "@/components/ScriptSetupExample.vue"

// eslint-disable-next-line
defineOptions({
    name: 'App'
})
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>
```