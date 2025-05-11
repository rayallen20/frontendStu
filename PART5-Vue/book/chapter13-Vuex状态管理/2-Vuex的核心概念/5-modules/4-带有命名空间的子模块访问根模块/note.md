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