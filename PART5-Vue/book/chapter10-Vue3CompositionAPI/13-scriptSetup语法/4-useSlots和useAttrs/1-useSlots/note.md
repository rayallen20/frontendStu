# 1-useSlots

- `components/UseSlotsApi.vue`:

```vue
<template>
    <div class="use-slots-api">
        <slot name="content"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script setup>
import {useSlots} from "vue";

// eslint-disable-next-line
defineOptions({
    name: 'UseSlotsApi',
})

const slots = useSlots()
console.log(slots.content)
console.log(slots.footer)
</script>

<style scoped>

</style>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        App组件
        <UseSlotsApi>
            <template #content>
                <div>内容</div>
            </template>

            <template #footer>
                <div>页脚</div>
            </template>
        </UseSlotsApi>
    </div>
</template>

<script setup>
import UseSlotsApi from "@/components/UseSlotsApi.vue"
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>
```