import {createStore} from "vuex"
import {INCREMENT_BY} from "@/store/mutationTypes"
import homeModule from "@/store/modules/home"
import userModule from "@/store/modules/user"

const store = createStore({
    // 根模块的state/mutations/actions/getters
    state() {
        return {
            counter: 0,
        }
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2
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
        incrementAction(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 1500)
        },
        decrementAction(context) {
            let {commit} = context
            commit('decrement')
        },
        incrementByAction(context, payload) {
            context.commit(INCREMENT_BY, payload)
        }
    },
    // 定义子模块
    modules: {
        // key: 指定子模块名称
        // value: 指定引入的子模块
        home: homeModule,
        user: userModule,
    }
})

export default store