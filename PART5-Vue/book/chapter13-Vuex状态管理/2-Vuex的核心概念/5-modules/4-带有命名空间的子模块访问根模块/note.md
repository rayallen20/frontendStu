# 4-带有命名空间的子模块访问根模块

- `getter`函数的参数:
  - `state`: 当前模块的状态
  - `getters`: 当前模块的`getter`
  - `rootState`: 根模块的状态
  - `rootGetters`: 根模块的`getter`
  - 例: `fn(state, getters, rootState, rootGetters)`
- 分发全局命名空间的`action`:
  - 在调用`dispatch()`方法时,第3个参数传入`{root: true}`,表示要分发根模块的`action`
  - 例: `context.dispatch('actionName', payload, { root: true })`
- 提交全局命名空间的`mutation`:
  - 在调用`commit()`方法时,第3个参数传入`{root: true}`,表示要提交根模块的`mutation`
  - 例: `context.commit('mutationName', payload, { root: true })`

- `src/store/modules/home.js`:

```javascript
const homeModule = {
  // 添加命名空间
  namespaced: true,
  state() {
    return {
      homeCounter: 100,
    }
  },
  getters: {
    doubleHomeCounter(state) {
      return state.homeCounter * 2
    },
    homeCounterAddRootCounter(state, _getters, rootState) {
      return state.homeCounter + rootState.counter
    },
    doubleRootCounter(_state, _getters, _rootState, rootGetters) {
      // 子模块可以通过rootGetters访问根模块的getters
      return rootGetters.doubleCounter
    }
  },
  mutations: {
    increment(state) {
      state.homeCounter++
    },
  },
  actions: {
    incrementAction(context) {
      context.commit('increment')
    },
    incrementRootAction(context) {
      // 子模块可以通过添加`{root: true}`参数访问根模块的mutations
      context.commit('increment', null, {root: true})
    }
  },
}

export default homeModule
```