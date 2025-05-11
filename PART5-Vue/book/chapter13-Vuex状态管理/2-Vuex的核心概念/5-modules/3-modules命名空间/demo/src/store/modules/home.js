const homeModule = {
    // 添加命名空间
    namespaced: true,
    state() {
        return {
            homeCounter: 100,
        }
    },
    getters: {
        doubleHomeCounter(state) {
            return state.homeCounter * 2
        },
        homeCounterAddRootCounter(state, _getters, rootState) {
            return state.homeCounter + rootState.counter
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
        }
    },
}

export default homeModule