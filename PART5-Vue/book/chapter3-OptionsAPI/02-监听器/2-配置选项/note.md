# 2. watch配置选项

- `handler`: 监听的回调函数,当监听的数据发生变化时,会调用该函数
- `deep`: 是否深度监听对象或数组中每个属性的变化,默认值为`false`
- `immediate`: 是否在初始渲染时立即执行回调函数,默认值为`false`

## 2.1 handler选项

```html
<template id="my-app">
    <h2>{{info.name}}</h2>
    <h2>{{info.book.name}}</h2>
    <button @click="changeInfo()">改变info</button>
    <button @click="changeInfoName()">改变info.name</button>
    <button @click="changeInfoBookName()">改变info.book.name</button>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                info: {
                    name: 'coderWhy',
                    age: 18,
                    book: {
                        name: '金瓶梅',
                    }
                }
            }
        },
        watch: {
            info: {
                handler(newInfo, oldInfo) {
                    console.log("newValue: ", newInfo)
                    console.log("oldValue: ", oldInfo)
                },
            }
        },
        methods: {
            changeInfo() {
                // this.info 的引用发生了变化
                this.info = {
                    name: 'kobe',
                    age: 41,
                    book: {
                        name: '金瓶梅',
                    }
                }
            },
            changeInfoName() {
                // this.info.name 的值发生了变化
                // 但 this.info 的引用没有发生变化
                this.info.name = 'rose'
            },
            changeInfoBookName() {
                // this.info.book.name 的值发生了变化
                // 但 this.info 的引用没有发生变化
                this.info.book.name = '青楼梦'
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

- `chanageInfo()`函数会触发watch中handler函数的回调
- `chanageInfoName()`和`changeInfoBookName()`函数不会触发watch中handler函数的回调
- 原因:**默认情况下,watch仅监听针对对象引用的变化,不监听其内部属性的变化**

## 2.2 deep选项

- `deep`选项: 用于配置是否深度监听对象中属性的变化

```html
<template id="my-app">
    <h2>{{info.name}}</h2>
    <h2>{{info.book.name}}</h2>
    <button @click="changeInfo()">改变info</button>
    <button @click="changeInfoName()">改变info.name</button>
    <button @click="changeInfoBookName()">改变info.book.name</button>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                info: {
                    name: 'coderWhy',
                    age: 18,
                    book: {
                        name: '金瓶梅',
                    }
                }
            }
        },
        watch: {
            info: {
                handler(newInfo, oldInfo) {
                    console.log("newValue: ", newInfo)
                    console.log("oldValue: ", oldInfo)
                },
                deep: true,
            }
        },
        methods: {
            changeInfo() {
                // this.info 的引用发生了变化
                this.info = {
                    name: 'kobe',
                    age: 41,
                    book: {
                        name: '金瓶梅',
                    }
                }
            },
            changeInfoName() {
                // this.info.name 的值发生了变化
                // 但 this.info 的引用没有发生变化
                this.info.name = 'rose'
            },
            changeInfoBookName() {
                // this.info.book.name 的值发生了变化
                // 但 this.info 的引用没有发生变化
                this.info.book.name = '青楼梦'
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

## 2.3 immediate选项

- `immediate`选项: 可以让`handler`中定义的函数立即执行一次,在默认情况下,该函数只在监听的数据发生变化时才会执行

```html
<template id="my-app">
    <h2>{{info.name}}</h2>
    <h2>{{info.book.name}}</h2>
    <button @click="changeInfo()">改变info</button>
    <button @click="changeInfoName()">改变info.name</button>
    <button @click="changeInfoBookName()">改变info.book.name</button>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                info: {
                    name: 'coderWhy',
                    age: 18,
                    book: {
                        name: '金瓶梅',
                    }
                }
            }
        },
        watch: {
            info: {
                // 配置 immediate: true
                // 会在组件挂载时立即执行一次handler
                // 此时 newInfo 的值是 data 中定义的 info 的值
                // oldInfo 的值是 undefined
                handler(newInfo, oldInfo) {
                    console.log("newValue: ", newInfo)
                    console.log("oldValue: ", oldInfo)
                },
                deep: true,
                immediate: true
            }
        },
        methods: {
            changeInfo() {
                this.info = {
                    name: 'kobe',
                    age: 41,
                    book: {
                        name: '金瓶梅',
                    }
                }
            },
            changeInfoName() {
                this.info.name = 'rose'
            },
            changeInfoBookName() {
                this.info.book.name = '青楼梦'
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

- 在组件挂载时执行`handler`函数:
    - 第1个实参的值: data中定义的响应式数据的值
    - 第2个实参的值: undefined