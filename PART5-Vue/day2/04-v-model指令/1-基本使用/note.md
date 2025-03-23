# 1-基本使用

```html
<template id="my-app">
    <input type="text" v-model="message">
    <h2>{{message}}</h2>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                message: 'Hello'
            }
        },
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```