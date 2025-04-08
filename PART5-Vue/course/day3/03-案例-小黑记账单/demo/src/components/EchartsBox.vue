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