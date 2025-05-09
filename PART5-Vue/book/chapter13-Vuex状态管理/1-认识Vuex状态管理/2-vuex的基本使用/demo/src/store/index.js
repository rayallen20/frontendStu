import {createStore} from "vuex"

// createStore: 创建一个新的Vuex store实例
// 参数: 一个对象,包含store的状态、getter、mutation、action等
// 这里只需要知道state()用于定义全局的状态数据即可
const store = createStore({
    state() {
        return {
            counter: 0,
        }
    },
    // 在mutations中修改全局状态
    mutations: {
        // 这里的state形参是state()函数返回的对象
        increment(state) {
            state.counter += 1
        },
        decrement(state) {
            state.counter -= 1
        }
    },
})

export default store