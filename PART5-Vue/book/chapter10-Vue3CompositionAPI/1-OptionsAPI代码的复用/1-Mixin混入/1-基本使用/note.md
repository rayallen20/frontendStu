# 1-基本使用

- 作用: 复用代码

- `mixins/demoMixin.js`:

```javascript
const demoMixin = {
    data() {
        return {
            message: 'Hello DemoMixin',
        }
    },
    methods: {
        foo() {
            console.log('demo mixin foo')
        }
    },
    created() {
        console.log('demo mixin created')
    },
}

export default demoMixin
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <h2>{{message}}</h2>
        <button @click="foo">点击调用demoMixin中定义的foo方法</button>
    </div>
</template>

<script>
import demoMixin from '@/mixins/demoMixins'
export default {
    name: 'App',
    mixins: [
        demoMixin
    ],
}
</script>
```