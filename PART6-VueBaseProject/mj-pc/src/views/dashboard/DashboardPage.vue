<template>
  <div class="dashboard-page">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>面经后台</el-breadcrumb-item>
      <el-breadcrumb-item>数据看板</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card style="height: 140px" shadow="never">
          <i class="el-icon-user"></i>
          <h5 class="tit">活跃用户</h5>
          <h2 class="num">802</h2>
          <p class="tag">
            <i>↑ 5.23%</i> 最近一个月
          </p>
        </el-card>

        <el-card style="height: 140px" shadow="never">
          <i class="el-icon-tickets"></i>
          <h5 class="tit">平均访问量</h5>
          <h2 class="num">1298</h2>
          <p class="tag">
            <i class="red">↓ 8.56%</i> 截止最近一周
          </p>
        </el-card>

        <el-card class="row" style="height: 180px" shadow="never">
          <h4>Enhance your Campaign for better outreach →</h4>
          <img src="@/assets/img.svg" alt />
        </el-card>
      </el-col>

      <el-col :span="18">
        <el-card style="height: 504px" shadow="never">
          <div ref="chartBox" class="chart-box" style="height: 500px"></div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card style="height: 420px" shadow="never">
          <h4>性别分布情况</h4>
          <img style="margin-top: 60px" src="@/assets/chart-03.png" alt />
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card style="height: 420px" shadow="never">
          <h4>浏览访问情况</h4>
          <img src="@/assets/chart-01.svg" alt />
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card style="height: 420px" shadow="never">
          <h4>设备系统访问情况</h4>
          <img style="margin-top: 20px" src="@/assets/chart-02.svg" alt />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import userAPI from '@/api/user'
import { ElMessage } from 'element-plus'

// eslint-disable-next-line
defineOptions({
  name: 'DashboardPage'
})

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition])

const chartBox = ref(null)
const chart = ref(null)
const chartData = ref(null)

userAPI.getLine().then(payload => {
  chartData.value = payload.list
}).catch(error => {
  if (error.response.data.message !== undefined) {
    ElMessage.error(error.response.data.message)
  } else {
    ElMessage.error('请求图表信息失败, 请稍后再试')
  }
})

watch(
  [chartBox, chartData],
  ([box, data]) => {
    if (box && data) {
    // 初始化只做1次
      if (chart.value === null) {
        chart.value = echarts.init(chartBox.value)
      }

      const xAxisData = data.map(item => item.ref_date)
      const visitUv = data.map(item => item.visit_uv)
      const visitUvNew = data.map(item => item.visit_uv_new)

      const option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xAxisData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: visitUv,
            type: 'line',
            lineStyle: {
              color: '#1bd4ae'
            },
            itemStyle: {
              color: '#1bd4ae'
            },
            smooth: true,
            areaStyle: {
              color: '#5ee0c6'
            }
          },
          {
            data: visitUvNew,
            type: 'line',
            lineStyle: {
              color: '#5ab1ef'
            },
            itemStyle: {
              color: '#5ab1ef'
            },
            smooth: true,
            areaStyle: {
              color: '#5bbfe3'
            }
          }
        ]
      }

      chart.value.setOption(option)
    }
  },
  {
    immediate: true,
    deep: true
  }
)
</script>

<style lang="scss" scoped>
.dashboard-page {
  .el-breadcrumb {
    margin-top: 10px;
    margin-bottom: 25px;
  }
  .el-card {
    margin-bottom: 20px;
    position: relative;
    &.row {
      h4 {
        width: 40%;
        float: left;
        font-size: 18px;
        margin-left: 5%;
      }
      img {
        width: 40%;
        float: left;
        margin-left: 10%;
        margin-top: 30px;
      }
    }
    [class^="el-icon"] {
      font-size: 30px;
      color: #ccc;
      position: absolute;
      right: 25px;
      top: 30px;
      font-weight: bold;
    }
    .tit {
      color: #6c757d;
      font-size: 14px;
      margin: 6px 0;
    }
    .num {
      color: #6c757d;
      font-size: 30px;
      margin: 6px 0;
    }
    .tag {
      color: #999;
      margin: 0;
      font-size: 14px;
      > i {
        font-style: normal;
        margin-right: 10px;
        color: rgb(10, 207, 151);
        &.red {
          color: #fa5c7c;
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    h4 {
      margin: 0;
      padding-bottom: 20px;
      color: #6c757d;
    }
  }
}
</style>
