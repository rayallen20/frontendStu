import {createStore} from "vuex"

const options = {
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
            discount: 0.9
        }
    },
    getters: {
        totalPrice(state, getters) {
            let totalPrice = 0

            state.books.forEach(book => {
                totalPrice += book.price * book.count
            })

            totalPrice = totalPrice * getters.currentDiscount

            return totalPrice
        },
        currentDiscount(state) {
            return state.discount
        },
        totalPriceByName(state, getters) {
            return (bookName) => {
                let totalPrice = 0

                const book = state.books.find(book => book.name === bookName)
                if (book === undefined) {
                    return totalPrice
                }

                totalPrice = book.price * book.count * getters.currentDiscount
                return totalPrice
            }
        }
    }
}

const store = createStore(options)

export default store