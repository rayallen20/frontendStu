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