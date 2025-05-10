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