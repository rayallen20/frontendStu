# 1. 数据集

## 1.1 在`series`中设置数据

```javascript
    const chartEle = document.querySelector('.chart')
const myChart = echarts.init(chartEle)

option = {
    xAxis: {
        // X轴类型
        type: 'category',

        // X轴数据 每个元素表示一组柱子的名称
        data: ['抹茶拿铁', '奶茶', '奶酪可可', '核桃布朗尼蛋糕', '纯牛奶']
    },
    yAxis: {},

    // 数据集
    series: [
        // 数据集中的每一个对象表示柱状图中的一类柱子(也可以认为是一种颜色的柱子)
        {
            // 图表类型
            // bar: 柱状图
            type: 'bar',
            // 一组柱子的名称
            name: '2015',
            // 一组柱子的数据
            // 89.3: 2015年抹茶拿铁的销量
            // 92.1: 2015年奶茶的销量
            // 94.4: 2015年奶酪可可的销量
            // 85.4: 2015年核桃布朗尼蛋糕的销量
            // 20: 2015年纯牛奶的销量
            data: [89.3, 92.1, 94.4, 85.4, 20]
        },
        {
            type: 'bar',
            name: '2016',
            data: [95.8, 89.4, 91.2, 76.9, 30]
        },
        {
            type: 'bar',
            name: '2017',
            data: [97.7, 83.1, 92.5, 78.1, 40]
        },
    ],
    // 显示图例
    legend:{},
    // 设置滚动条
    dataZoom: [
        {
            type: 'slider', // 滑动条
            xAxisIndex: 0,  // 控制X轴
            start: 0,       // 初始范围起点(0%)
            end: 50         // 初始范围终点(50%)
        },
        {
            type: 'inside', // 内置滚动 鼠标滚轮可控制图表的放大缩小
            xAxisIndex: 0,
            start: 0,
            end: 50
        }
    ]
}

myChart.setOption(option)
```

## 1.2 在`dataset`中设置数据

```javascript
    const chartEle = document.querySelector('.chart')
    const myChart = echarts.init(chartEle)
    
    option = {
        legend: {},
        // 鼠标悬停时显示提示框
        tooltip: {},
        dataset: {
            // 提供数据
            source: [
                // 数据集中第1行第1列的元素表示数据的类别名称 用于标识每一列的数据类型
                // 在渲染出的图表中没有看到这个数据 是因为它仅作为数据的标签 不会在图表中直接显示
                // 图表会根据这些标签来对应数据列 但不会将标签本身作为数据展示
                // 说白了这个元素就是一个标签
                // 可以认为第一行是excel中的表头 从第2个元素开始定义了这个表格有几列
                ['product', '2015', '2016', '2017'],
                ['抹茶拿铁', 43.3, 85.8, 93.7],
                ['奶茶', 83.1, 73.4, 55.1],
                ['奶酪可可', 86.4, 65.2, 82.5],
                ['核桃布朗尼蛋糕', 72.4, 53.9, 39.1],
                ['纯牛奶', 10, 20, 30]
            ]
        },
        // 声明一个X轴 类目轴(category)
        // 默认情况下 类目轴对应到 dataset.source 第一列
        xAxis: { type: 'category' },
        // 声明一个Y轴 数值轴
        yAxis: {},
        // 声明多个bar series
        // 默认情况下 每个series会自动对应到 dataset 的每一列
        // 也就是说 dataset.source[0] 有N个元素 这里就应该有 (N-1) 个series
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
    
    myChart.setOption(option)
```

- 结论: 学这玩意儿时,脑子里要有个表格的概念
- 默认series会自动对应到dataset的每一列
    - `dataset.source[0]`定义了这个表格有几列

## 1.3 把`dataset`的行或列映射为`series`

```javascript
    const chartEle = document.querySelector('.chart')
    const myChart = echarts.init(chartEle)
    
    option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['抹茶拿铁', 41.1, 30.4, 65.1, 53.3, 60, 70],
                ['奶茶', 86.5, 92.1, 85.7, 83.1, 50, 30],
                ['奶酪可可', 24.1, 67.2, 79.5, 86.4, 20, 40],
                ['核桃布朗尼蛋糕', 55.2, 67.1, 69.2, 72.4, 10, 80],
                ['纯牛奶', 10, 20, 30, 40, 70, 90]
            ]
        },
        xAxis: [
            // 定义一个X轴
            {
                type: 'category',
                // gridIndex: 定义该X轴所属的网格
                gridIndex: 0
            },
            
            // 定义第二个X轴
            {
                type: 'category',
                gridIndex: 1
            }
        ],
        yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
        
        // 定义网格布局 里边有几个元素就是定义了几个网格
        // bottom: '55%' 表示这个网格的底部距离容器底部55% 类似margin-bottom: 55%
        // top: '55%' 表示这个网格的顶部距离容器顶部55% 类似margin-top: 55%
        // 这两个网格将图表区域分成上下两部分 用于展示不同的系列数据
        grid: [{ bottom: '65%' }, { top: '65%' }],
        series: [
            // 这几个series会出现在第一个直角坐标系中
            // 每个系列对应到dataset的每一行
            // dataset有5行(不算表头) 所以需要5个seriesLayoutBy=row的series
            {
                type: 'bar',
                seriesLayoutBy: 'row',
                // xAxisIndex表示该系列数据所使用的X轴的索引
                // 在ECharts中可以定义多个X轴
                // 通过索引来指定某个系列数据使用哪个X轴
                // 索引从0开始
                
                // 简单理解: 表示这个series是用第0个X坐标轴
                xAxisIndex: 0,
                yAxisIndex: 0
            },
            { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 0, yAxisIndex: 0 },
            { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 0, yAxisIndex: 0 },
            { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 0, yAxisIndex: 0 },
            { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 0, yAxisIndex: 0 },
            // 这几个系列会出现在第二个直角坐标系中
            // 每个系列对应到dataset的每一列
            // dataset有6列(不算第一列) 所以需要6个seriesLayoutBy=column的series
            { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
            { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
            { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
            { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
            { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
            { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
        ]
    }
    
    myChart.setOption(option)
```

- 定义网格数量: `grid: [{ bottom: '65%' }, { top: '65%' }]`
- 定义X轴数量: `xAxis: [{ type: 'category', gridIndex: 0 }, { type: 'category', gridIndex: 1 }]`
- 定义根据行或列映射: `seriesLayoutBy: 'row'`/`seriesLayoutBy: 'column'`
  - 根据行: series的元素个数与(`dataset`的行数 - 1)相同
  - 根据列: series的元素个数与(`dataset`的列数 - 1)相同
  - 默认值: `seriesLayoutBy: 'column'`

## 1.4 维度

- 把`dataset`的行或列映射为`series`时,可以通过`dimensions`属性指定映射的维度
  - 把`series`映射到行时:
    - 行即维度
    - 列即条目
    - 有点像:行即数组,列即数组中的元素
  - 把`series`映射到列时:
    - 列即维度
    - 行即条目
    - 有点像:列即数组,行即数组中的元素
  - 维度: 可以认为是对数据结构的定义
  - 条目: 可以认为是数据的具体值

```javascript
    const chartEle = document.querySelector('.chart')
    const myChart = echarts.init(chartEle)
    
    option = {
        legend: {},
        tooltip: {},
        dataset: {
            sourceHeader: false,
            // 将数据映射到行时 会将数据的第一行作为维度
            // 换言之 这里就是把维度集中定义了
            // 说人话就是 表示每一行的数据是什么
            dimensions: [
                'product',
                '抹茶拿铁',
                '奶茶',
                '奶酪可可'
            ],
            source: [
                // 此时 source的第1行定义的是条目的名称
                // 说人话就是 表示每一列的数据是什么
                ['2012', '2013', '2014'],
                [86.5, 92.1, 85.7],
                [24.1, 67.2, 79.5],
                [10, 20, 30],
            ]
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {},
        series: [
            {
                type: 'bar',
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                seriesLayoutBy: 'row'
            },
        ],
    }
    
    myChart.setOption(option)
```

## 1.5 数据到图形的映射

- 它就是个组件,大概看看怎么用,改巴改巴能用处来即可,不往下看了