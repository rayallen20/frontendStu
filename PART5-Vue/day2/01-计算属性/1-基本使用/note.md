# 1-基本使用

## 1.1 需求

- 有2个变量(`firstName`和`lastName`),需要将这2个变量拼接起来,并且在页面中显示
- 有1个变量`score`:
    - 当`score >= 60`时,显示`及格`
    - 当`score < 60`时,显示`不及格`
- 有1个变量`message`:
    - 某些情况下,需要直接显示`message`
    - 某些情况下,需要将`message`中的单词反转后显示

## 1.2 实现

### a. 模板语法的实现

```html
<template id="my-app">
    <h4>{{firstName + lastName}}</h4>
    <h4>{{score >= 60 ? '及格' : '不及格'}}</h4>
    <h4>{{message.split(' ').reverse().join(' ')}}</h4>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                firstName: 'Kobe',
                lastName: 'Bryant',
                score: 80,
                message: 'Hello World'
            }
        },
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

### b. methods的实现

```html
<template id="my-app">
    <h4>{{getFullName()}}</h4>
    <h4>{{getResult()}}</h4>
    <h4>{{reverseMessage()}}</h4>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                firstName: 'Kobe',
                lastName: 'Bryant',
                score: 80,
                message: 'Hello World'
            }
        },
        methods: {
            getFullName() {
                return this.firstName + this.lastName
            },
            getResult() {
                return this.score >= 60 ? '及格' : '不及格'
            },
            reverseMessage() {
                return this.message.split(' ').reverse().join(' ')
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

### c. 计算属性的实现

```html
<template id="my-app">
    <h4>{{fullName}}</h4>
    <h4>{{result}}</h4>
    <h4>{{reverseMessage}}</h4>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                firstName: 'Kobe',
                lastName: 'Bryant',
                score: 80,
                message: 'Hello World'
            }
        },
        computed: {
            fullName() {
                return this.firstName + this.lastName
            },
            result() {
                return this.score >= 60 ? '及格' : '不及格'
            },
            reverseMessage() {
                return this.message.split(' ').reverse().join(' ')
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

- 计算属性在模板中使用时,不需要加`()`调用
- 计算属性是有缓存的
- **计算属性和`methods`一样,不能使用箭头函数来定义函数**