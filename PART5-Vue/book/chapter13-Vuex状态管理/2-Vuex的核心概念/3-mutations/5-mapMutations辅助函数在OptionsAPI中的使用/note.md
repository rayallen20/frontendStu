# 5-mapMutations辅助函数在OptionsAPI中的使用

- `mapMutations()`辅助函数和`mapState()`/`mapGetters()`使用方式类似

- `src/components/UseMutations.vue`:

```vue
<template>
    <div class="use-mutations">
        <h4>当前计数: {{$store.state.counter}}</h4>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <input type="number" v-model="num">
        <button @click="incrementBy({num})">+{{num}}</button>
    </div>
</template>

<script>
import {mapMutations} from "vuex"
import {INCREMENT_BY} from "@/store/mutationTypes"

export default {
    name: 'UseMutations',
    data() {
        return {
            num: 0
        }
    },
    methods: {
        ...mapMutations({
            increment: 'increment',     // 将this.increment映射为this.$store.commit('increment')
            decrement: 'decrement',     // 将this.decrement映射为this.$store.commit('decrement')
            incrementBy: INCREMENT_BY,  // 将this.incrementBy映射为this.$store.commit(INCREMENT_BY) 注意这里的INCREMENT_BY是个常量
        })
    }
}
</script>
```