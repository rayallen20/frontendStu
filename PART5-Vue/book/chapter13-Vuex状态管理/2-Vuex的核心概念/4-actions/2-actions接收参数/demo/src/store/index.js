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
    }
})

export default store