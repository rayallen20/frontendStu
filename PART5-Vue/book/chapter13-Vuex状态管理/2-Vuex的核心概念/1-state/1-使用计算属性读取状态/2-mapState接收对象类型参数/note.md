# 2-`mapState()`接收对象类型参数

- `src/store/index.js`:

```javascript
import {createStore} from "vuex"

const store = createStore({
    state() {
        return {
            counter: 0,
            name: 'why',
            age: 18,
        }
    },
})

export default store
```

- `src/components/MapStateReadObject.vue`:

```vue
<template>
    <div class="use-computed-read-store"></div>
    <h4>Home: {{$store.state.counter}}</h4>
    <h4>Home: {{counter}}</h4>
    <h4>Name: {{name}}</h4>
    <h4>Age: {{myAge}}</h4>
</template>

<script>
    import {mapState} from "vuex"

    export default {
        name: 'MapStateReadObject',
        data() {
            return {
                firstName: 'coder'
            }
        },
        // mapState()函数接收一个对象作为参数 并返回一个对象
        computed: mapState({
            counter: (state) => state.counter,      // mapState的参数对象中 箭头函数的this绑定的不是组件实例
            name(state) {
                // mapState的参数对象中 普通函数的this绑定的是组件实例
                return this.firstName + ' ' + state.name
            },
            // 在mapState的参数对象中 和computed中一样 可以自定义key作为变量名
            // 此时的value是一个字符串 代表state中的属性名
            // 等价于: myAge: state => state.age
            myAge: 'age'
        })
    }
</script>
```

