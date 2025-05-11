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
        },
        doubleRootCounter(_state, _getters, _rootState, rootGetters) {
            // 子模块可以通过rootGetters访问根模块的getters
            return rootGetters.doubleCounter
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
        incrementRootAction(context) {
            // 子模块可以通过添加`{root: true}`参数访问根模块的mutations
            context.commit('increment', null, {root: true})
        }
    },
}

export default homeModule