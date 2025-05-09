import {createStore} from "vuex"

const store = createStore({
    state() {
        return {
            counter: 0,
            name: 'why',
            age: 18,
        }
    },
})

export default store