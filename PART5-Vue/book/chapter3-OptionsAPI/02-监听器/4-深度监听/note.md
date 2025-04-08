# 4-深度监听

## 4.1 仅监听对象中的某个属性

- 作用: 仅监听对象中的某个属性,而非整个对象
- 此时:
  - 配置`deep: true`: 如果对象的引用发生变化,也会触发针对某个属性的监听(**即使该属性的字面量没有发生变化**)
  - 不配置`deep: true`: 仅当该属性的字面量发生变化时,才会触发监听

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
            // 仅监听对象的某个属性
            "info.name": {
                handler(newName, oldName) {
                    console.log("newName: ", newName)
                    console.log("oldName: ", oldName)
                },
                // 配置 deep: true,会深度监听对象中的属性
                // 例如: 字面量没有发生变化但引用发生变化,也会触发监听回调
                // 不配置 deep: true,只会监听字面量的变化
                // deep: true,
            }
        },
        methods: {
            changeInfo() {
                this.info = {
                    name: 'coderWhy',
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

## 4.2 监听函数的新值和旧值

- 配置深度监听时,**监听函数的新值和旧值都指向同一个引用**(除非新值指向了一个新的引用)

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
                    // 配置深度监听时 新值和旧值指向的是同一个引用(除非新值指向了一个新的引用)
                    console.log(newInfo === oldInfo)
                },
                deep: true,
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

## 4.3 监听数组内部属性的变化

```html
<template id="my-app">
    <h2 v-for="(friend, index) in friends" :key="index">{{friend.name}}</h2>
    <button @click="addFriend()">新增朋友</button>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                friends: [
                    {
                        name: 'why',
                    },
                    {
                        name: 'kobe',
                    }
                ]
            }
        },
        watch: {
            friends: {
                handler(newFriends, oldFriends) {
                    console.log("newFriends: ", newFriends)
                    console.log("oldFriends: ", oldFriends)
                    // 和监听对象一样 只要没有改变引用地址 则新值和旧值指向相同的引用
                    console.log(newFriends === oldFriends)
                },
                deep: true,
            }
        },
        methods: {
            addFriend() {
                const friend = {
                    name: 'rose'
                }

                this.friends.push(friend)
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```