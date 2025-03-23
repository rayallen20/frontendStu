# 3-字符串、数组和API语法

## 3.1 字符串语法

```html
<template id="my-app">
    <h2>{{b}}</h2>
    <button @click="changeB()">改变b</button>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                b: 2,
            }
        },
        watch: {
            // 字符串的值为methods中定义的方法名
            b: 'someMethod',
        },
        methods: {
            someMethod() {
                console.log('b changed')
            },
            changeB() {
                this.b = 3
            }
        }
    }
    
    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

- 字符串的值为`methods`中定义的方法名

## 3.2 数组语法

```html
<template id="my-app">
    <h2>{{f}}</h2>
    <button @click="changeF()">改变f</button>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                f: 5,
            }
        },
        watch: {
            // 回调函数数组中的函数 会依次被调用
            f: [
                'handle1',
                function handle2() {
                    console.log('handle 2 changed')
                },
                function handle3() {
                    console.log('handle 3 changed')
                },
            ],
        },
        methods: {
            handle1() {
                console.log('handle 1 changed')
            },
            changeF() {
                this.f = 10
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

- 回调函数数组中的函数会依次被调用

## 3.3 API语法

```html
<template id="my-app">
    <h2>{{f}}</h2>
    <button @click="changeF()">改变f</button>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                f: 5,
            }
        },
        created() {
            const key = 'f'

            const handler = function (newVal, oldVal) {
                console.log('newVal:', newVal)
                console.log('oldVal:', oldVal)
            }

            const option = {
                deep: true,
                immediate: true,
            }

            // $watch API语法
            this.$watch(key, handler, option)
        },
        methods: {
            handle1() {
                console.log('handle 1 changed')
            },
            changeF() {
                this.f = 10
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```