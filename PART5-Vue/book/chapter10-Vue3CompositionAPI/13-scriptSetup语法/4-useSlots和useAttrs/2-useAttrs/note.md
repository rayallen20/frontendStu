# 2-useAttrs

- `components/UseAttrApi.vue`:

```vue
<template>
    <div class="use-attr-api">
        {{message}}
    </div>
</template>

<script setup>
import {useAttrs} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'UseAttrApi'
})

// eslint-disable-next-line
defineProps({
    message: {
        type: String,
        default: 'hello'
    }
})

const attrs = useAttrs()
console.log(attrs.foo)
console.log(attrs.bar)
</script>

<style scoped>

</style>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        App组件
        <UseAttrApi message="App传递的message" foo="fooAttr" bar="barContent"></UseAttrApi>
    </div>
</template>

<script setup>
import UseAttrApi from "@/components/UseAttrApi.vue";
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>
```