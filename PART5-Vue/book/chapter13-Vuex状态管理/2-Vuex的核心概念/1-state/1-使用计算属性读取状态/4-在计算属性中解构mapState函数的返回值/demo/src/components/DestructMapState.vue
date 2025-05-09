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