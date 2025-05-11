# 6-action返回Promise对象

- `action`通常用于处理异步操作,若想在分发时知道`action`何时结束,可以让`action`返回一个Promise对象
- 客户端代码在`then()`方法中监听`action`的结束即可

- `src/store/index.js`:

```javascript
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
```

- `src/components/UseActions.vue`:

```vue
<template>
    <div class="use-actions">
        <h4>uuid: {{$store.state.uuid}}</h4>
    </div>
</template>

<script setup>
import {onMounted} from "vue"
import {useActions} from "@/hooks";

// eslint-disable-next-line
defineOptions({
    name: 'UseActions'
})

onMounted(() => {
    const {getUUIDAction} = useActions([
        'getUUIDAction'
    ])

    const promise = getUUIDAction()

    promise.
    then(res => console.log(res)).
    catch(err => console.error(err))
})
</script>
```