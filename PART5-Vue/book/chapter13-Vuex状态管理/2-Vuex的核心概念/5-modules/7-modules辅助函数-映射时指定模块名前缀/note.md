# 7-modules辅助函数-映射时指定模块名前缀

- 最简单且直接的方式,只需在调用`mapState()`/`mapGetters()`/`mapMutations()`/`mapActions()`时,在要获取的`state`/`getter`/`mutation`/`action`前加上模块名即可:

- `src/components/UseModules.vue`:

```vue
<template>
    <div class="use-modules">
        <h4>homeCounter: {{homeCounter}}</h4>
        <h4>doubleHomeCounter: {{doubleHomeCounter}}</h4>
        <button @click="homeIncrementCommit">+1</button>
        <button @click="incrementAction">+1</button>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex"

export default {
    name: 'UseModules',
    computed: {
        ...mapState({
            homeCounter: (state) => state.home.homeCounter
        }),
        ...mapGetters({
            doubleHomeCounter: "home/doubleHomeCounter",
        })
    },
    methods: {
        ...mapMutations({
            homeIncrementCommit: 'home/increment',
        }),
        ...mapActions({
            incrementAction: 'home/incrementAction'
        })
    }
}
</script>
```