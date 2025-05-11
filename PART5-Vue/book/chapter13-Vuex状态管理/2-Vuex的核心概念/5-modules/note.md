# 5-modules

- `modules`: 用于将`store`分割成多个模块,大致代码如下:

```javascript
const moduleA = {
    state: () => ({
        // ...
    }),
    mutations: {
        // ...
    },
    actions: {
        // ...
    },
    getters: {
        // ...
    }
}

const moduleB = {
    state: () => ({
        // ...
    }),
    mutations: {
        // ...
    },
    actions: {
        // ...
    },
    getters: {
        // ...
    }
}

const store = createStore({
    // 根模块的state/mutations/actions/getters
    state: () => ({
        // ...
    }),
    mutations: {
        // ...
    },
    actions: {
        // ...
    },
    getters: {
        // ...
    },
    modules: {
        // 指定a为moduleA模块的名称
        a: moduleA,
        b: moduleB
    }
})

// 获取moduleA的state
store.state.a
// 获取moduleB的state
store.state.b
```