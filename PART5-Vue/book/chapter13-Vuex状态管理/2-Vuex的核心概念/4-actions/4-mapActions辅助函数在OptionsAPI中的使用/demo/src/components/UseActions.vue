<template>
    <div class="use-actions">
        <h4>当前计数: {{$store.state.counter}}</h4>
        <button @click="incrementAction">+1</button>
        <button @click="decrementAction">-1</button>
        <input type="number" v-model="num">
        <button @click="incrementByAction({num})">+{{num}}</button>
    </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
    name: "UseActions",
    data() {
        return {
            num: 0
        }
    },
    methods: {
        ...mapActions(['incrementAction', 'decrementAction']),
        // 有参数的action不能直接解构使用
        incrementByAction(payload) {
            this.$store.dispatch("incrementByAction", payload)
        }
    }
}
</script>