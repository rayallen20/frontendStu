import {createStore} from "vuex"

const store = createStore({
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {      // mutations属性中定义的函数可以获取到state()方法返回的对象 函数名就是mutation的事件类型(type)
            state.counter++           // 通过state()方法返回的对象修改全局的state
        },
        decrement(state) {
            state.counter--
        },
    }
})

export default store