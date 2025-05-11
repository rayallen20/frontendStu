<template>
    <div class="use-modules">
        <h4>homeCounter: {{homeCounter}}</h4>
        <h4>doubleHomeCounter: {{doubleHomeCounter}}</h4>
        <button @click="increment">+1</button>
        <button @click="incrementAction">+1</button>
    </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

// createNamespacedHelpers()函数返回的对象中,包含绑定在给定命名空间上的`mapState()`/`mapGetters()`/`mapMutations()`/`mapActions()`函数
const homeLib = createNamespacedHelpers('home')

export default {
    name: 'UseModules',
    computed: {
        ...homeLib.mapState(['homeCounter']),
        ...homeLib.mapGetters(['doubleHomeCounter'])
    },
    methods: {
        ...homeLib.mapMutations(['increment']),
        ...homeLib.mapActions(['incrementAction'])
    }
}
</script>