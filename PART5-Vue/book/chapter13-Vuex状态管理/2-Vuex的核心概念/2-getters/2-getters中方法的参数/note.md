# 2-getters中方法的参数

- `getters`中定义的方法可以接收2个参数:
  - `state`: 当前模块的状态
  - `getters`: 当前模块的`getters`.表示该计算属性要基于的其他计算属性进行计算

- `src/store/index.js`:

```javascript
import {createStore} from "vuex"

const store = createStore({
    state() {
        return {
            books: [
                {
                    name: 'Vue.js',
                    count: 10,
                    price: 10,
                },
                {
                    name: 'React',
                    count: 5,
                    price: 20,
                },
                {
                    name: 'webpack',
                    count: 4,
                    price: 25,
                },
            ],
            discount: 0.9,
        }
    },
    getters: {
        totalPrice(state, getters) {
            let totalPrice = 0
            state.books.forEach(book => {
                totalPrice += book.price * book.count
            })

            return totalPrice * getters.currentDiscount
        },
        currentDiscount(state) {
            return state.discount
        }
    }
})

export default store
```

- `src/components/UseGetter.vue`:

```vue
<template>
    <div class="use-getter"></div>
    <h4>书籍总价: {{$store.getters.totalPrice}}</h4>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: 'UseGetter',
})
</script>
```