const args = {
    template: '#my-app',
    data() {
        return {
            configList:[
                {
                    title: '处理器',
                    option: [
                        {
                            name: 'I7-13700KF',
                            oldPrice: 3000,
                            newPrice: 2888,
                            select: false,
                        },
                        {
                            name: 'I7-13900KF',
                            oldPrice: 4000,
                            newPrice: 3666,
                            select: true,
                        },
                        {
                            name: 'I9-13700KF',
                            oldPrice: 5000,
                            newPrice: 4444,
                            select: false
                        }
                    ]
                },
                {
                    title: '显卡',
                    option: [
                        {
                            name: '4070TI',
                            oldPrice: 5000,
                            newPrice: 4444,
                            select: false,
                        },
                        {
                            name: '4080',
                            oldPrice: 6000,
                            newPrice: 5666,
                            select: false
                        },
                        {
                            name: '4090',
                            oldPrice: 7000,
                            newPrice: 6888,
                            select: true,
                        }
                    ]
                },
                {
                    title: '内存',
                    option: [
                        {
                            name: '32GB',
                            oldPrice: 1000,
                            newPrice: 988,
                            select: false,
                        },
                        {
                            name: '64GB',
                            oldPrice: 2000,
                            newPrice: 1888,
                            select: true
                        }
                    ]
                }
            ],
            num: 1
        }
    },
    methods: {
        changeSelected(title, optionName) {
            const config = this.configList.find(config => config.title === title)
            config.option.forEach(option => {
                if (option.name === optionName) {
                    option.select = true
                    return
                }

                option.select = false
            })
        },
        increase() {
            this.num++
        },
        decrease() {
            if (this.num === 1) {
                alert('商品数量不能小于1')
                return
            }

            this.num--
        },
    },
    computed: {
        originalPrice: {
            get() {
                let unitPrice = 0
                this.configList.forEach(item => {
                    item.option.forEach(option => {
                        if(option.select) {
                            unitPrice += option.oldPrice
                        }
                    })
                })
                return unitPrice * this.num
            },
        },
        discountPrice: {
            get() {
                let unitPrice = 0
                this.configList.forEach(item => {
                    item.option.forEach(option => {
                        if(option.select) {
                            unitPrice += option.newPrice
                        }
                    })
                })
                return unitPrice * this.num
            },
        }
    }
}

const app = Vue.createApp(args)
app.mount('#app')