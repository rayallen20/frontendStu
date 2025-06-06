import { createStore } from 'vuex'
import user from '@/store/modules/user'

const options = {
  state () {},
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
}

const store = createStore(options)

export default store
