import {createStore} from "vuex"

const store = createStore({
    state() {
        return {
            uuid: null,
        }
    },
    mutations: {
        addUUID (state, payload) {
            state.uuid = payload.uuid
        }
    },
    actions: {
        getUUIDAction(context) {
            return new Promise((resolve, reject) => {
                // fetch()方法返回一个Promise对象
                fetch('https://httpbin.org/uuid').
                then(response => {
                    // Response.json()方法返回一个Promise对象
                    const resPromise = response.json()
                    resPromise.then(data => {
                        context.commit('addUUID', {uuid: data.uuid})
                        resolve(data)
                    })
                }).
                catch(error => reject(error))
            })
        }
    }
})

export default store