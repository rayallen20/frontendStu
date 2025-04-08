const args = {
    template: '#my-app',
    data() {
        return {
            books: [
                {
                    id: 1,
                    name: '《算法导论》',
                    date: '2006-9',
                    price: 85.00,
                    count: 1
                },
                {
                    id: 2,
                    name: '《UNIX编程艺术》',
                    date: '2006-2',
                    price: 59.00,
                    count: 1
                },
                {
                    id: 3,
                    name: '《编程珠玑》',
                    date: '2008-10',
                    price: 39.00,
                    count: 1
                },
                {
                    id: 4,
                    name: '《代码大全》',
                    date: '2006-3',
                    price: 128.00,
                    count: 1
                },
            ]
        }
    },
    methods: {
        formatCount(count) {
            return "¥" + count
        },
        increment(id) {
            const book = this.books.find(book => book.id === id)
            book.count++
        },
        decrement(id) {
            const book = this.books.find(book => book.id === id)

            if (book.count === 1) {
                alert('商品数量不能小于1')
                return
            }

            book.count--
        },
        isDisabled(id) {
            const book = this.books.find(book => book.id === id)
            return book.count === 1
        },
        remove(id) {
            this.books = this.books.filter(book => book.id !== id)
        },
    },
    computed: {
        // 总价只有getter 没有setter 因为不能直接修改总价
        totalPrice: {
            get() {
                let totalPrice = 0

                this.books.forEach(book => {
                    totalPrice += book.price * book.count
                })

                return totalPrice
            }
        }
    },
    watch: {
    },
}

const app = Vue.createApp(args)
app.mount('#app')