import {createStore} from "vuex"
import {INCREMENT_BY} from "@/store/mutationTypes"

const store = createStore({
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        [INCREMENT_BY](state, payload) {
            state.counter += payload.num
        },
    },
    actions: {
        incrementAction(context) {      // context: 是一个与store实例有相同方法和属性的上下文对象
            // 使用setTimeout模拟异步操作
            setTimeout(() => {
                context.commit('increment')
            }, 1500)
        },
        decrementAction(context) {
            // 解构context对象
            let {commit} = context
            commit('decrement')
        }
    }
})

export default store