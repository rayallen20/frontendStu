# 3-getters中定义的方法返回函数类型

- 若`getters`中定义的方法返回函数,则在使用时就相当于调用这个函数
- 且可以向该函数传递参数

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
        },
        totalPriceByName(state) {
            // getters返回一个函数 该函数接收一个参数
            return (bookName) => {
                let totalPrice = 0

                state.books.forEach(book => {
                    if (book.name === bookName) {
                        totalPrice += book.price * book.count
                    }
                })

                return totalPrice
            }
        },
    }
})

export default store
```

- `src/components/UseGetter.vue`:

```vue
<template>
    <div class="use-getter"></div>
    <h4>书籍总价: {{$store.getters.totalPrice}}</h4>
    <!--
    $store.getters.totalPriceByName 相当于拿到了返回的函数
    $store.getters.totalPriceByName('Vue.js') 则是调用了这个函数并传递了参数
    -->
    <h4>vue.js总价: {{$store.getters.totalPriceByName('Vue.js')}}</h4>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: 'UseGetter',
})
</script>
```