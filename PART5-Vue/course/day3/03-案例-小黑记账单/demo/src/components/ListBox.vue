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