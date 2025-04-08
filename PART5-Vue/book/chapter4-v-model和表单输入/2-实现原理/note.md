# 2-实现原理

- `v-model`指令的本质是个语法糖:
    - 使用`v-bind`指令为元素的`value`属性绑定变量
    - 使用`v-on`指令为元素绑定`input`事件,并在事件回调函数中重新为`value`属性绑定的变量赋值

```html
<input type="text" v-model="msg">
```

等价于:

```html
<input type="text" :value="msg" @input="msg = $event.target.value">
```

例:

```html
<template id="my-app">
    <input type="text" :value="message" @input="inputChange($event)">
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
        methods: {
            inputChange(event) {
                this.message = event.target.value
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```