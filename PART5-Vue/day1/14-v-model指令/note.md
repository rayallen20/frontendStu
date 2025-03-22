# 14-v-model指令

- `v-model`: 双向数据绑定(通常用在表单上,用于快速获取或设置表单元素的值)
- 双向数据绑定:
    - 数据变化,则视图自动更新
    - 视图变化,则数据自动更新

```html
<template id="my-app">
    账户：<input type="text" v-model="username"> <br><br>
    密码：<input type="password" v-model="password"> <br><br>
    <button @click="login">登录</button>
    <button @click="reset">重置</button>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            login() {
                console.log(this.username)
                console.log(this.password)
            },
            reset() {
                this.username = ''
                this.password = ''
            }
        }
    }
    
    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```