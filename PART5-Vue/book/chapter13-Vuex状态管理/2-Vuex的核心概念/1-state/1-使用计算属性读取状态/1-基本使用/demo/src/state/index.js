import {createStore} from "vuex"

const store = createStore({
    state() {
        return {
            counter: 0,
        }
    },
})

export default store