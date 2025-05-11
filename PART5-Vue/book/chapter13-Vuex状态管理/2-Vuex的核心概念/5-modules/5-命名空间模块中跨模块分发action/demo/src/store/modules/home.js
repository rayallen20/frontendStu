const homeModule = {
    namespaced: true,
    state() {
        return {
            homeCounter: 100,
        }
    },
    mutations: {
        increment(state) {
            state.homeCounter++
        },
    },
    actions: {
        incrementAction(context) {
            context.commit('increment')
        },
        incrementUserCounterAction(context) {
            // home模块中 跨模块调用user模块中的action
            context.dispatch('user/incrementAction', null, {root: true})
        }
    },
}

export default homeModule