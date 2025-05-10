<template>
    <div class="use-mutations"></div>
    <!--
    state中定义的数据是响应式的 因此调用mutations中的方法修改state后
    依赖state的组件会自动更新
    -->
    <h4>当前计数: {{$store.state.counter}}</h4>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
</template>

<script setup>
import {useStore} from "vuex"

// eslint-disable-next-line
defineOptions({
    name: 'UseMutations'
})

// Composition API中 无法通过this关键字访问到组件实例
// 也就无法像Options API那样通过this.$store访问到store实例
// 需要使用useStore()方法获取store实例
const store = useStore()

const increment = () => {
    // 这里调用commit方法传递的实参就是mutation的事件类型(type)
    store.commit('increment')
}

const decrement = () => {
    store.commit('decrement')
}
</script>