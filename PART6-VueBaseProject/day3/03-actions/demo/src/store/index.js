import {createStore} from "vuex"
import {INCREMENT_BY} from "@/store/mutationTypes"

const options = {
    state() {
        return {
            counter: 0
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
        }
    },
    actions: {
        incrementAction(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 1000)
        },
        decrementAction(context) {
            setTimeout(() => {
                context.commit('decrement')
            }, 1000)
        },
        incrementByAction(context, payload) {
            setTimeout(() => {
                context.commit(INCREMENT_BY, payload)
            }, 1000)
        }
    }
}

const store = createStore(options)

export default store