# 03-案例-小黑记账单

## 1. 需求

- 渲染数据
- 添加数据
- 删除数据
- 渲染饼图

## 2. 实现

### 2.1 渲染数据

- 组件加载完成后,发送AJAX请求,获取数据
- 这里把发送AJAX请求,获取数据这个过程单独封装成一个函数,不要写在`created`钩子函数中
  - 因为后续删除/添加等操作完成后,都需要重新请求列表数据

### 2.2 渲染饼图

- 兄弟组件之间传递数据要使用全局事件总线
- 用于绘制饼图的数据作为一个计算属性使用,这里合适的方式是使用计算属性,而非监听器
  - 因为监听器用于监听数据变化,而计算属性用于计算数据
  - 绘制饼图的数据是由事件总线传递的数据计算得来,而非监听数据变化
- 这里踩了一个坑:
  - 在这个组件中的`created()`钩子函数中,能够访问到来自事件总线传递的数据
  - 但是,在`mounted()`钩子函数中,无法访问到来自事件总线传递的数据,数据仍然是初始值
- 原因解释:
  - 这里我认为在`created()`中正确设置了数据后,在`mounted()`中必然能够访问到
  - 我的思维有2个错误:

1. 时序问题:

    正确的时序是: `ListBox.created() → 发起异步请求 → EchartsBox.created() → EchartsBox.mounted() → 请求完成 → 触发事件 → EchartsBox.getBillList()`

    虽然`EchartsBox.created()`注册事件监听器是同步操作,但是这个事件的触发是**异步操作**,因此事件触发是有可能晚于`EchartsBox.mounted()`的

    这只是一个**可能**的情况,而即使事件触发早于`EchartsBox.mounted()`,在`EchartsBox.mounted()`中,依然拿不到更新后的响应式数据,这是因为下一个原因

2. 响应式数据更新的实际流程

    当事件触发时,`EchartsBox.getBillList()`中,有这样一句:`this.billList = billList`

    且,在`EchartsBox.getBillList()`中,还打印了数据变更后的`this.billList`,似乎是这个组件的响应式数据`billList`已经更新成功了

    但是,这里有个关键点:**对响应式的赋值操作会触发队列化的更新**

    实际的DOM更新和计算属性的重新计算,都是在下一个事件循环中发生的.`EchartsBox.mounted()`中的代码是感知不到这次响应式数据异步更新的

    至于为什么能够在`EchartsBox.getBillList()`中能够打印出变化后的数据,那是因为在该方法中,打印的`this.billList`,是方法内的本地变量,而不是组件的响应式数据

    证据就是,在`EchartsBox.created()`中,在` emitter.on()`后边打印`this.billList`,也是初始值,而不是事件触发后的值,因为事件处理函数也是异步执行的,而等到这个函数执行完,组件早就被创建和挂载到DOM上了

    因此,就算请求足够快,在`EchartsBox.mounted()`中,也无法访问到事件触发后的数据,因为更新响应式数据的操作滞后于`EchartsBox.mounted()`的执行

3. 正解

    正解应该是使用监听器监听`EchartsBox.billList`,当数据变化时,绘制饼图.因为当数据变化时,才是响应式数据确认被更新了,此时才应该绘制饼图

错误的代码如下:

```vue
<template>
    <div class="echarts-box"></div>
</template>

<script>
import emitter from "../utils/eventBus"
import * as echarts from 'echarts'

export default {
    name: 'EchartsBox',
    data() {
        return {
            billList: [],
        }
    },
    methods: {
        getBillList(billList) {
            this.billList = billList
            console.log('getBillList:', this.billList)  // 这里有数据
        },
    },
    created() {
        // 监听全局事件
        emitter.on('getBillList', this.getBillList)
        console.log('created: ', this.billList)  // 这里没有数据
    },
    mounted() {
        console.log(this.billList)  // 这里没有数据
        const chartEle = document.querySelector('.echarts-box')
        const billChart = echarts.init(chartEle)

        const option = {
            // 大标题
            title: {
                text: '消费账单列表',
                left: 'center'
            },
            // 提示框
            tooltip: {
                trigger: 'item'
            },
            // 图例
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            // 数据项
            series: [
                {
                    name: '消费账单',
                    type: 'pie',
                    radius: '50%', // 半径
                    data: this.chartSeries,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }

        billChart.setOption(option)
    },
    computed: {
        chartSeries: {
            get() {
                return this.billList.map(item => {
                    return {
                        value: item.price,
                        name: item.name
                    }
                })
            },
        }
    }
}
</script>

<style scoped>
.echarts-box {
    width: 600px;
    height: 400px;
    padding: 30px;
    margin: 0 auto;
    border: 1px solid #ccc;
}

@media screen and (max-width: 1000px) {
    .echarts-box {
        margin-top: 30px;
    }
}
</style>
```

## 3. 完整实现

- `App.vue`

```vue
<template>
    <div class="app">
        <div class="contain">
            <ListBox></ListBox>
            <EchartsBox></EchartsBox>
        </div>
    </div>
</template>

<script>
import ListBox from './components/ListBox.vue'
import EchartsBox from './components/EchartsBox.vue'

export default {
    name: 'App',
    components: {
        ListBox,
        EchartsBox
    },
}
</script>

<style scoped>
.contain {
    display: flex;
    padding: 10px;
}

@media screen and (max-width: 1000px) {
    .contain {
        flex-wrap: wrap;
    }
}
</style>
```

- `ListBox.vue`

```vue
<template>
    <div class="list-box">
        <!-- 添加资产 -->
        <form class="my-form">
            <input type="text" class="form-control" placeholder="消费名称" v-model="bill.name"/>
            <input type="number" class="form-control" placeholder="消费价格" v-model.number="bill.price"/>
            <button type="button" class="btn btn-primary" @click="addBill">添加账单</button>
        </form>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>编号</th>
                    <th>消费名称</th>
                    <th>消费价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(bill, index) in billList" :key="bill.id">
                    <td>{{index + 1}}</td>
                    <td>{{bill.name}}</td>
                    <td :class="{red: bill.price >= 100}">{{bill.price}}.00</td>
                    <td><a href="javascript:" @click="delBill(bill.id)">删除</a></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">消费总计： {{totalPrice}}.00</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import axios from "axios"
import emitter from "../utils/eventBus"

export default {
    name: 'ListBox',
    data() {
        return {
            billList: [],
            bill: {
                name: '',
                price: 0
            }
        }
    },
    methods: {
        async requestBillList() {
            const options = {
                params: {
                    creator: '老瘪'
                }
            }
            try {
                const url = 'https://applet-base-api-t.itheima.net/bill'
                const data = await axios.get(url, options)
                this.billList = data.data.data

                // 获取数据后 触发全局事件
                emitter.emit('getBillList', this.billList)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        },
        async delBill(id) {
            const url = 'https://applet-base-api-t.itheima.net/bill/' + id
            try {
                await axios.delete(url)
            } catch (e) {
                console.error('Error deleting bill:', e)
            } finally {
                await this.requestBillList()
            }
        },
        async addBill() {
            const url = 'https://applet-base-api-t.itheima.net/bill'
            const param = {
                name: this.bill.name,
                price: this.bill.price,
                creator: '老瘪'
            }

            try {
                await axios.post(url, param)
            } catch (e) {
                console.error('Error adding bill:', e)
            } finally {
                // 清空表单
                this.bill.name = ''
                this.bill.price = 0

                await this.requestBillList()
            }
        },
    },
    async created() {
        await this.requestBillList()
    },
    computed: {
        totalPrice: {
            // 需要说明的是:
            // 计算属性是在组件实例化时创建的
            // 但是 计算属性的getter方法是懒执行的
            // 懒执行: 只有在访问计算属性 或 计算属性依赖的响应式数据发生变化时 才会执行
            // 即使created()中以异步操作的方式操作了响应式数据 计算属性也会在异步回调执行后自动更新
            get() {
                let total = 0
                this.billList.forEach(item => {
                    total += item.price
                })

                return total
            }
        }
    },
}
</script>

<style scoped>
.red {
    color: red!important;
}
.my-form {
    display: flex;
    margin: 20px 0;
}
.my-form input {
    flex: 1;
    margin-right: 20px;
}
.table > :not(:first-child) {
    border-top: none;
}
.list-box {
    flex: 1;
    padding: 0 30px;
}
.list-box  a {
    text-decoration: none;
}
tfoot {
    font-weight: bold;
}
@media screen and (max-width: 1000px) {
    .list-box {
        width: 100%;
    }
}
</style>
```

- `EchartsBox.vue`

```vue
<template>
    <div class="echarts-box"></div>
</template>

<script>
import emitter from "../utils/eventBus"
import * as echarts from 'echarts'

export default {
    name: 'EchartsBox',
    data() {
        return {
            billList: undefined,
            billChart: null,
        }
    },
    methods: {
        getBillList(billList) {
            this.billList = billList
        },
        getChartSeries(billList) {
            return billList.map((bill) => {
                return {
                    value: bill.price,
                    name: bill.name
                }
            })
        },
    },
    created() {
        // 监听全局事件
        emitter.on('getBillList', this.getBillList)
    },
    mounted() {
        const chartEle = document.querySelector('.echarts-box')
        this.billChart = echarts.init(chartEle)
    },
    watch: {
        billList: {
            handler(newVal) {
                if (newVal === undefined) {
                    return
                }

                const chartSeries = this.getChartSeries(newVal)

                const option = {
                    // 大标题
                    title: {
                        text: '消费账单列表',
                        left: 'center'
                    },
                    // 提示框
                    tooltip: {
                        trigger: 'item'
                    },
                    // 图例
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    // 数据项
                    series: [
                        {
                            name: '消费账单',
                            type: 'pie',
                            radius: '50%', // 半径
                            data: chartSeries,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }

                this.billChart.setOption(option)
            },
            deep: true,
            immediate: true
        }
    }
}
</script>

<style scoped>
.echarts-box {
    width: 600px;
    height: 400px;
    padding: 30px;
    margin: 0 auto;
    border: 1px solid #ccc;
}

@media screen and (max-width: 1000px) {
    .echarts-box {
        margin-top: 30px;
    }
}
</style>
```