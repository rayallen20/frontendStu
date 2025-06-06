const user = {
  namespaced: true,
  state () {
    return {
      token: localStorage.getItem('mj-pc-token')
    }
  },
  getters: {},
  mutations: {
    updateToken (state, newToken) {
      state.token = newToken
      localStorage.setItem('mj-pc-token', newToken)
    }
  }
}

export default user
