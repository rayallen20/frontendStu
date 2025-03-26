# 3-自定义事件的参数验证

- `emits`属性的类型为Object时,可以对自定义事件的参数进行验证
  - **子组件中的验证即使不通过,也不会阻止事件的触发**
- 例: 新增需求: 若`n < 10`,则在控制台中警告`数字过小,不允许操作`

```vue
<template>
    <div>
        <button @click="increment()">+1</button>
        <button @click="decrement()">-1</button>
        <input type="number" v-model="num">
        <button @click="addN()">+n</button>
    </div>
</template>

<script>
export default {
    name: 'CounterOperation',
    emits: {
        add: null,
        sub: null,
        addN: (num) => {
            if (num < 10) {
                console.warn('数字过小,不允许操作')
                return false
            }

            return true
        },
    },
    data() {
        return {
            num: 0,
        }
    },
    methods: {
        increment() {
            this.$emit('add')
        },
        decrement() {
            this.$emit('sub')
        },
        addN() {
            // 触发自定义事件时传递参数
            this.$emit('addN', this.num)
            this.num = 0
        }
    }
}
</script>

<style scoped>
button, input{
    margin: 0 2px;
}
</style>
```

- `emits`中的校验机制,即使校验失败,依然不会影响事件的触发,其原因大致如下:

1. `emits`中的校验声明起到的是一个文档的作用
2. 和`prop`保持一致性(`prop`的校验和`emits`一样,也是软校验,不会阻止数据的传递)

- 如果需要严格校验来阻止事件的触发,需要在父组件的事件处理函数中进行参数校验