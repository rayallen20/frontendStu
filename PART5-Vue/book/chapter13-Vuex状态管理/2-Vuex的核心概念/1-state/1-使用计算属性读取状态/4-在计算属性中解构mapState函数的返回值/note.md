# 4-在计算属性中解构mapState函数的返回值

- `mapState()`函数在`computed`中支持解构,这样就可以在计算属性中,同时包含组件自己的计算属性和从`store`中映射过来的属性了

- `src/components/DestructMapState.vue`:

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
    name: 'DestructMapState',
    data() {
        return {
            firstName: 'coder'
        }
    },
    computed: {
        counter() {
            return this.$store.state.counter
        },
        // 解构mapState函数的返回值
        ...mapState(['name']),
        ...mapState({
            myAge: 'age'
        })
    }
}
</script>
```