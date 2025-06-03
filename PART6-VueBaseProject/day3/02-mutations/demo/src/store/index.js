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
    }
}

const store = createStore(options)

export default store