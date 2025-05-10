import {createStore} from "vuex"
import {INCREMENT_BY} from "@/store/mutationTypes";

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
        // 在JS中 使用`[]`作为动态属性名
        // 如果不加`[]` 则会被当做字符串处理
        [INCREMENT_BY](state, payload) {
            state.counter += payload.num
        }
    }
})

export default store