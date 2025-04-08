# 1. 基本使用

## 1.1 需求

- 有一个输入框,用户可在其中输入问题
- 实时监听用户输入的问题,一旦输入的内容发生变化,就到服务器中查询答案

## 1.2 实现

```html
<template id="my-app">
    请输入问题: <input type="text" v-model="question">
    <div>{{answer}}</div>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                question: '',
                answer: ''
            }
        },
        watch: {
            // key: 需要观察的表达式
            // 每当key的值发生变化时,都会回调watch中key对应的函数
            // 该函数的第1个参数是变化后的值
            // 第2个参数是变化前的值
            question: function (newValue, oldValue) {
                console.log("新 question 值: ", newValue, " 旧 question 值: ", oldValue)
                this.queryAnswer()
            },
        },
        methods: {
            queryAnswer() {
                this.answer = `你的问题是: ${this.question}? 答案: 哈哈哈哈`
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

- key: 需要观察的表达式
- 每当key的值发生变化时,都会回调watch中key对应的函数
- 该函数的第1个参数是变化后的值
- 第2个参数是变化前的值

### a. function语法

- 上述写法即为function语法,也可以简写为:

```html
<template id="my-app">
    请输入问题: <input type="text" v-model="question">
    <div>{{answer}}</div>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                question: '',
                answer: ''
            }
        },
        watch: {
            // function语法
            question (newValue, oldValue) {
                console.log("新 question 值: ", newValue, " 旧 question 值: ", oldValue)
                this.queryAnswer()
            },
        },
        methods: {
            queryAnswer() {
                this.answer = `你的问题是: ${this.question}? 答案: 哈哈哈哈`
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

### b. 对象语法

- watch中的key也可以是一个对象:

```html
<template id="my-app">
    请输入问题: <input type="text" v-model="question">
    <div>{{answer}}</div>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                question: '',
                answer: ''
            }
        },
        watch: {
            // 对象语法
            question: {
                handler(newValue, oldValue) {
                    console.log("新 question 值: ", newValue, " 旧 question 值: ", oldValue)
                    this.queryAnswer()
                },
            },
        },
        methods: {
            queryAnswer() {
                this.answer = `你的问题是: ${this.question}? 答案: 哈哈哈哈`
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```