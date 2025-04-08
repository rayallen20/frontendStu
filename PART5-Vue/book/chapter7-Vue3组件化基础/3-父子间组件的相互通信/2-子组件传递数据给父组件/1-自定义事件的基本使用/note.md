# 1-自定义事件的基本使用

## 1. 子组件

```vue
<template>
    <div>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
    export default {
        name: 'CounterOperation',
        // step1. 定义子组件自身要触发的自定义事件
        // (这些事件需要在父组件中监听和处理)
        emits: ['add', 'sub'],
        methods: {
            increment() {
                // step2. 触发自定义事件
                this.$emit('add')
            },
            decrement() {
                this.$emit('sub')
            }
        }
    }
</script>

<style scoped>
    button {
        margin: 0 2px;
    }
</style>
```

- step1. 在`emits`属性中定义子组件自身要触发的自定义事件
  - 这一步实际上定义的是:**子组件中的哪个元素上发生了什么事件**,然后将这句话作为一个整体,以**子组件的事件**的形式定义出来
- step2. 触发自定义事件

## 2. 父组件

```vue
<template>
    <div>
        <h4>当前计数: {{counter}}</h4>
        <!-- step3. 父组件监听子组件的事件 -->
        <CounterOperation @add="addOne()" @sub="subOne()"></CounterOperation>
    </div>
</template>

<script>
    import CounterOperation from './components/CounterOperation.vue'
    export default {
        name: 'App',
        components: {
            CounterOperation,
        },
        data() {
            return {
                counter: 0,
            }
        },
        methods: {
            // step4. 当子组件中的自定义事件触发时 父组件中处理事件
            addOne() {
                this.counter++
            },
            subOne() {
                this.counter--
            },
        }
    }
</script>

<style scoped>

</style>
```

- step3. 在父组件中监听子组件的事件
  - 这一步就相当于: **父组件得知子组件的某个事件被触发了**
- step4. 当子组件中的自定义事件触发时,父组件中处理事件
  - 这一步就相当于: **处理子组件触发事件对父组件的影响**