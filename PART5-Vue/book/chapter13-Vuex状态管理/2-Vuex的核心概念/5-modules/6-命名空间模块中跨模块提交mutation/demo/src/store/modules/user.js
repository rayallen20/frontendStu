const userModule = {
    namespaced: true,
    state() {
        return {
            userCounter: 1000,
        }
    },
    mutations: {
        increment(state) {
            state.userCounter++
        },
    },
    actions: {
        incrementAction(context) {
            context.commit('increment')
        },
        incrementHomeCounterAction(context) {
            // user模块中 跨模块调用home模块中的mutation
            context.commit('home/increment', null, { root: true })
        }
    },
}

export default userModule