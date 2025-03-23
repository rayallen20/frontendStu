# 3-计算属性的`setter`和`getter`

```html
<template id="my-app">
    <button @click="changeFullName()">修改fullName</button>
    <h4>{{fullName}}</h4>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                firstName: 'Kobe',
                lastName: 'Bryant',
            }
        },
        methods: {
            changeFullName() {
                // 触发计算属性fullName的set()方法回调
                // 这里能通过this访问到fullName,就说明计算属性也被挂载到了Vue实例上
                this.fullName = 'Coder Why'
            },
        },
        computed: {
            fullName: {
                get() {
                    return this.firstName + ' ' + this.lastName
                },
                set(newValue) {
                    console.log(newValue)

                    // 重新赋值
                    const names = newValue.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[1]
                }
            },
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

- `computed`中的计算属性,和`data`中的数据/`methods`中的函数一样,都会被挂载到Vue实例上
- 计算属性的`get()`方法: 用于获取计算属性的计算结果
- 计算属性的`set()`方法: 用于在计算属性被赋值时,更新该计算属性依赖的响应式数据
    - 计算属性默认只有`get()`方法,也就是说,Vue的设计者认为计算属性默认是只读的
    - **当计算属性可以被修改,且修改时需要更新其依赖的响应式数据时**,需要定义`set()`方法
    - 这里的`get()`和`set()`方法,其实就是常规理解的getter和setter