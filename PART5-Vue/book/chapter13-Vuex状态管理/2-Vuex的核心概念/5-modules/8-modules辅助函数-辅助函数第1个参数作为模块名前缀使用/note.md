# 8-modules辅助函数-辅助函数第1个参数作为模块名前缀使用

- `src/components/UseModules.vue`:

```vue
<template>
    <div class="use-modules">
        <h4>homeCounter: {{homeCounter}}</h4>
        <h4>doubleHomeCounter: {{doubleHomeCounter}}</h4>
        <button @click="increment">+1</button>
        <button @click="incrementAction">+1</button>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex"

export default {
    name: 'UseModules',
    computed: {
        // 辅助函数的第1个参数作为模块名前缀
        ...mapState('home', ['homeCounter']),
        ...mapGetters('home', ['doubleHomeCounter'])
    },
    methods: {
        ...mapMutations('home', ['increment']),
        ...mapActions('home', ['incrementAction'])
    }
}
</script>
```