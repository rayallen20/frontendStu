const userModule = {
    state() {
        return {
            userCounter: 1000,
        }
    },
    getters: {
        // 子模块内的getter函数的形参state是该模块的局部状态
        doubleUserCounter(state) {
            return state.userCounter * 2
        },
        // 子模块内的getter函数的第3个形参表示根模块的状态
        doubleUserCounterAddRootCounter(_state, getters, rootState) {
            return getters.doubleUserCounter + rootState.counter
        }
    },
    mutations: {},
    actions: {
        incrementAction(context) {
            // 在子模块的action函数中 通过context.state访问局部状态
            console.log(context.state.userCounter)
            // 在子模块的action函数中 通过context.rootState访问根模块的状态
            console.log(context.rootState.counter)

            context.commit('increment')
        }
    },
}

export default userModule