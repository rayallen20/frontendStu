# 2-自定义事件的参数传递

## 1. 子组件

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
    emits: ['add', 'sub', 'addN'],
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

- 子组件传递参数: `this.$emit('自定义事件名, 实参...)`

## 2. 父组件

```vue
<template>
    <div>
        <h4>当前计数: {{counter}}</h4>
        <CounterOperation @add="addOne()" @sub="subOne()" @addN="addNum"></CounterOperation>
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
        addOne() {
            this.counter++
        },
        subOne() {
            this.counter--
        },
        // 父组件中的事件处理函数接收子组件传递的参数
        addNum(num) {
            this.counter += num
        }
    }
}
</script>

<style scoped>

</style>
```

- 父组件接收参数: 在事件处理函数的形参列表中定义对应形参即可

## 3. 总结

- 所谓的子组件向父组件传递数据,实际上就是:
  - 子组件: 自定义事件和事件的触发条件
    - 这里的触发条件还是`@click`等原生事件
    - 所谓自定义事件,仅仅是将**子组件的某个元素被如何如何(点击/输入变化)**这件事定义为了一个事件
  - 父组件: 监听和处理子组件的自定义事件
    - 这里的监听,就是`@子组件自定义的事件名`
    - 而处理,就是`@子组件自定义的事件名=事件处理函数`
      - 实际上这里所谓的处理,处理的是**子组件的事件发生,对本组件(父组件)产生了何种影响**
- 其实这整个过程有点像原生JS的`addEventListener(事件, 事件处理函数)`
  - 子组件定义了这里的**事件**
  - 父组件定义了这里的**事件处理函数**
  - 在这个过程中,二者通过`@事件名=事件处理函数`建立了联系(比如传递参数)