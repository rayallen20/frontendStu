import cartAPI from '@/api/cart'

const cart = {
    strict: true,
    namespaced: true,
    state() {
        return {
            list: [],
        }
    },
    mutations: {
        setList(state, list) {
            state.list = list
        },
        addItem(state, targetItem) {
            const item = state.list.find(item => item.id === targetItem.id)
            if (item === undefined) {
                return
            }

            item.count++
        },
        subtractItem(state, targetItem) {
            const item = state.list.find(item => item.id === targetItem.id)
            if (item === undefined) {
                return
            }

            if (item.count > 1) {
                item.count--
            }
        }
    },
    getters: {
        totalPrice(state) {
            let totalPrice = 0
            state.list.forEach(item => {
                totalPrice += item.count * item.price
            })

            return totalPrice
        },
        totalCount(state) {
            let totalCount = 0
            state.list.forEach(item => {
                totalCount += item.count
            })

            return totalCount
        }
    },
    actions: {
        async getList(context) {
            try {
                const response = await cartAPI.getList()
                context.commit('setList', response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async addItem(context, targetItem) {
            const item = context.state.list.find(item => item.id === targetItem.id)
            if (item === undefined) {
                return
            }

            const count = item.count + 1
            const payload = {
                id: item.id,
                count,
            }

            try {
                await cartAPI.patchItem(payload)
                context.commit('addItem', targetItem)
            } catch (error) {
                console.log(error)
            }
        },
        async subtractItem(context, targetItem) {
            const item = context.state.list.find(item => item.id === targetItem.id)
            if (item === undefined) {
                return
            }

            if (item.count === 1) {
                return
            }

            const count = item.count - 1
            const payload = {
                id: item.id,
                count,
            }

            try {
                await cartAPI.patchItem(payload)
                context.commit('subtractItem', targetItem)
            } catch (error) {
                console.log(error)
            }
        }
    },
}

export default cart