# 1-OptionsAPI方式

- `components/OptionsApiExample.vue`:

```vue
<template>
    <div class="options-api-example">
        <div>当前计数: {{counter}}</div>
        <div>当前计数 * 2: {{doubleCounter}}</div>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
export default {
    name: 'OptionsApiExample',
    data() {
        return {
            counter: 100,
        }
    },
    computed: {
        doubleCounter() {
            return this.counter * 2
        },
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        },
    },
}
</script>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        App组件
        <OptionsApiExample></OptionsApiExample>
    </div>
</template>

<script>
import OptionsApiExample from "@/components/OptionsApiExample.vue"

export default {
    name: 'App',
    components: {
        OptionsApiExample,
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>
```