const homeModule = {
    namespaced: true,
    state() {
        return {
            homeCounter: 100
        }
    },
    getters: {},
    mutations: {
        increment(state) {
            state.homeCounter++
        }
    },
    actions: {
        incrementAction(context) {
            context.commit('increment')
        },
        incrementUserCounterAction(context) {
            context.commit('user/increment', null, { root: true })
        }
    },
}

export default homeModule