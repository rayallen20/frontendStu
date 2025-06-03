import {createStore} from "vuex";
import cart from "@/store/modules/cart"

const options = {
    strict: true,
    namespaced: true,
    state() {
        return {}
    },
    mutations: {},
    getters: {},
    actions: {},
    modules: {
        cart,
    },
}

const store = createStore(options)

export default store