<template>
    <div class="use-computed-read-store"></div>
    <h4>Home: {{$store.state.counter}}</h4>
    <h4>Home: {{counter}}</h4>
    <h4>Name: {{name}}</h4>
    <h4>Age: {{age}}</h4>
</template>

<script>
import {mapState} from "vuex"

export default {
    name: 'MapStateReadArray',
    data() {
        return {
            firstName: 'coder'
        }
    },
    // mapState()函数接收一个数组作为参数 并返回一个对象
    computed: mapState([
        'counter', // 直接映射 this.counter 为 store.state.counter
        'name', // 直接映射 this.name 为 store.state.name
        'age' // 直接映射 this.age 为 store.state.age
    ])
}
</script>