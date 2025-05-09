# 2-Vuex的核心概念

- `state`: 存储数据,所有组件都可以访问和使用state中的状态(从思路上来讲,设计者认为这些全局数据是一种**状态**)
- `getters`: 可以认为是`store`的计算属性,用于从`store`返回的`state`中派生出一些状态
- `mutations`: 用于**同步**修改`store`中的状态,是唯一可以直接修改`state`的地方,必须是同步函数
- `actions`: 用于**异步**提交`mutations`,可以包含任意异步操作
- `modules`: 用于将`store`分割成模块,每个模块拥有自己的`state`/`mutations`/`actions`/`getters`,可以嵌套子模块