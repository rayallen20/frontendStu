import {createStore} from "vuex"

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
        incrementBy(state, payload) {
            state.counter += payload.num
        }
    }
})

export default store