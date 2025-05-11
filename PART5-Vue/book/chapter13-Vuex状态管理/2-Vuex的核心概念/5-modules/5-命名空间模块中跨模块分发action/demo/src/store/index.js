import {createStore} from "vuex"
import homeModule from "@/store/modules/home"
import userModule from "@/store/modules/user"

const store = createStore({
    modules: {
        home: homeModule,
        user: userModule,
    }
})

export default store