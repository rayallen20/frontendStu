import {createStore} from "vuex"
import {INCREMENT_BY} from "@/store/mutationTypes"
import homeModule from "@/store/home"
import userModule from "@/store/user"

const options = {
    state() {
        return {
            counter: 10
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
    },
    modules: {
        home: homeModule,
        user: userModule,
    }
}

const store = createStore(options)

export default store