# 3-modules命名空间

- 上一节的案例中存在1个问题: 不同模块中存在同名的`action`,通过`store.dispatch()`方法分发`action`时,多个模块的`action`会被同时触发,造成数据混乱
- 原因: 默认情况下,子模块内部的`action`/`mutation`/`getter`会被注册到全局命名空间中,使得多个模块可以对同一个`action`做出响应
- 解决办法: 为子模块添加命名空间(`namespaced: true`),这样当子模块被注册后,该模块的`action`/`mutation`/`getter`会根据模块注册的路径调整命名

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
        }
    },
}

export default homeModule
```

- `src/components/UseModules.vue`:

```vue
<template>
    <div class="use-modules">
        <!-- 访问home模块的state -->
        <h4>home state: {{$store.state.home.homeCounter}}</h4>
        <!--
            访问home模块的getter
            对于添加了命名空间的子模块,在访问getter时需要添加`模块名/`作为前缀
        -->
        <h4>home getter: doubleHomeCounter :{{$store.getters['home/doubleHomeCounter']}}</h4>
        <h4>home getter: homeCounterAddRootCounter :{{$store.getters['home/homeCounterAddRootCounter']}}</h4>
        <button @click="incrementAction">+1</button>
    </div>
</template>

<script setup>
import {useStore} from "vuex"

// eslint-disable-next-line
defineOptions({
    name: 'UseModules'
})

const store = useStore()

const incrementAction = () => {
    // 分发home模块的action
    // 同理,对于添加了命名空间的子模块,在访问action时需要添加`模块名/`作为前缀
    store.dispatch('home/incrementAction')
}
</script>
```