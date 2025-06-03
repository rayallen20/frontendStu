const userModule = {
    namespaced: true,
    strict: true,
    state() {
        return {
            userCounter: 1000
        }
    },
    getters: {
        doubleUserCounter(state) {
            return state.userCounter * 2
        },
        doubleUserCounterAddRootCounter(_state, getters, rootState) {
            return getters.doubleUserCounter + rootState.counter
        }
    },
    mutations: {
        increment(state) {
            state.userCounter++
        },
    },
    actions: {
        incrementAction(context) {
            console.log(context.state.userCounter)
            console.log(context.rootState.counter)

            context.commit('increment', null, {root: true})
        }
    },
}

export default userModule