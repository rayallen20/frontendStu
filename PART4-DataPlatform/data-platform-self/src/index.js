import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/css/common.css'
import '@/css/index.css'
import common from '@/common.js'
import * as echarts from 'echarts'

window.addEventListener('load', checkUser)

function checkUser() {
    const user = common.getUser()

    if (user === null) {
        redirectToLogin()
        return
    }

    if (user.token === '') {
        redirectToLogin()
        return
    }

    const usernameEle = document.querySelector('.username')
    common.renderUser(usernameEle)

    requestAndRender(user.token)
}

function redirectToLogin() {
    common.showToast('请先登录')
    setTimeout(() => {
        location.href = './login.html'
    }, 800)
}

async function requestAndRender() {
    try {
        const payload = await common.axiosInstance.get('/dashboard')

        // Tips: 解构的代码会常用 需要记一下语法
        const {overview, year, salaryData, groupData, provinceData} = payload

        renderDashboard(overview)
        renderSalaryLine(year)
        renderSalaryPie(salaryData)
        renderGroup(groupData)
        renderGenderSalaryPies(salaryData)
        renderMap(provinceData)
    } catch (error) {
        console.log(error)
        common.showToast(error.response.data.message)
    }
}

function renderDashboard(overview) {
    renderSalary(overview.salary)
    renderStudentCount(overview.student_count)
    renderAge(overview.age)
    renderGroupCount(overview.group_count)
}

function renderSalary(salary) {
    const salaryEle = document.querySelector('.salary')
    salaryEle.innerText = salary + ''
}

function renderStudentCount(studentCount) {
    const studentCountEle = document.querySelector('.student_count')
    studentCountEle.innerText = studentCount + ''
}

function renderAge(age) {
    const ageEle = document.querySelector('.age')
    ageEle.innerText = age + ''
}

function renderGroupCount(groupCount) {
    const groupCountEle = document.querySelector('.group_count')
    groupCountEle.innerText = groupCount + ''
}

function renderSalaryLine(year) {
    // Tips: 这种从对象数组中取值的方式也常用 要记一下
    const yearScale = year.map(item => item.month)
    const yearSeries = year.map(item => item.salary)

    const lineEle = document.querySelector('#line')
    const lineChart = echarts.init(lineEle)

    const option = {
        title: {
            text: "2022年全学科薪资走势",
            top: 15,
            left: 10,
            textStyle: {
                fontSize: 16,
            },
        },
        grid: {
            top: '20%',
        },
        tooltip: {
            show: true,
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                }
            },
            data: yearScale,
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                }
            }
        },
        series: [
            {
                data: yearSeries,
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 6,
                    // 设置折线的颜色
                    color: getSalaryLineColor(),
                },
                symbol: 'emptyCircle',
                symbolSize: 10,
                areaStyle: {
                    color: getSalaryAreaColor()
                }
            }
        ]
    }

    lineChart.setOption(option)
}

function getSalaryLineColor() {
    return {
        // 线性渐变
        type: 'liner',
        // 这里的x/y x0/y0 是相对于坐标系的位置 表示图形在容器中的百分比位置
        // x的值: 从左到右 0-1
        // y的值: 从上到下 0-1
        // 取值范围为 [0,1]
        // 本例中以下取值表示的含义为: 颜色变化仅受到y轴的影响, x轴方向上颜色不变
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            // 0% 处的颜色
            {
                offset: 0,
                color: '#499FEE'
            },

            // 100% 处的颜色
            {
                offset: 1,
                color: '#5D75F0'
            }
        ]
    }
}

function getSalaryAreaColor() {
    return {
        // 线性渐变
        type: 'liner',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            // 0% 处的颜色
            {
                offset: 0,
                color: '#499FEE',
            },

            // 80% 处的颜色
            {
                offset: 0.8,
                color: 'rgba(255,255,255,0.2)',
            },

            // 100% 处的颜色
            {
                offset: 1,
                color: 'rgba(255,255,255,0)',
            },
        ]
    }
}

function renderSalaryPie(salary) {
    const salaryEle = document.querySelector('#salary')
    const salaryChart = echarts.init(salaryEle)

    const option = {
        title: {
            text: "班级薪资分布",
            top: 10,
            left: 10,
            textStyle: {
                fontSize: 16,
            },
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: 0,
            left: 'center'
        },
        series: [
            {
                name: '班级薪资分布',
                type: 'pie',
                // 设置饼图的大小
                // 数组形式则表示设置内半径和外半径
                // 单个值则表示设置饼的半径
                // 百分比是指图表容器的长和宽中 较小的那个的百分比
                radius: [
                    '55%',
                    '70%'
                ],
                // 防止标签重叠策略
                // 饼图需要开启 环图通常不需要开启
                avoidLabelOverlap: false,
                // 饼图中每个扇区的样式设置
                itemStyle: {
                    // 饼图每一个扇形的外边缘的圆角半径
                    borderRadius: 10,
                    // 扇形的边框颜色
                    borderColor: '#fff',
                    // 扇形的边框宽度
                    borderWidth: 2
                },
                // 饼图的标签
                label: {
                    show: false,
                    position: 'center',
                },
                // 高亮状态下的扇形和标签样式
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                },
                // 每个扇形的引导线 需配合label使用
                // 仅在label.position的值为outside时有效
                labelLine: {
                    show: false
                },
                data: genPieData(salary)
            },
        ],
        color: [
            '#FDA224',
            '#5097FF',
            '#3ABCFA',
            '#34D39A'
        ],
    }

    salaryChart.setOption(option)
}

function genPieData(salaries) {
    return salaries.map(salary => {
        return {
            // b_count: 男生人数
            // g_count: 女生人数
            value: salary.b_count + salary.g_count,
            // label: 薪资阶段
            name: salary.label,
        }
    })
}

function renderGroup(group) {
    const btnContainer = document.querySelector('#btns')
    btnContainer.innerHTML = ''

    for (const groupId in group) {
        const groupData = group[groupId]
        const btn = createGroupButton(groupId, groupData)
        btnContainer.appendChild(btn)
    }
}

function createGroupButton(groupId, groupData) {
    const btn = document.createElement('button')
    btn.classList.add('btn', 'btn-xs')
    btn.innerText = groupId

    if (groupId === "1") {
        btn.classList.add('btn-blue')
        renderLineChart(groupData)
    }

    btn.addEventListener('click', (event) => {
        renderGroupButton(event)
        renderLineChart(groupData)
    })

    return btn
}

function renderGroupButton(event) {
    const btnCollection = document.querySelectorAll('#btns button')
    btnCollection.forEach(btn => {
        btn.classList.remove('btn-blue')
    })

    event.target.classList.add('btn-blue')
}

function renderLineChart(groupData) {
    const linesEle = document.querySelector('#lines')

    const chartInstance = echarts.getInstanceByDom(linesEle)
    if (chartInstance !== undefined) {
        chartInstance.dispose()
    }

    linesEle.innerHTML = ''
    const linesChart = echarts.init(linesEle)
    const option = {
        grid: {
            left: 70,
            top: 30,
            right: 30,
            bottom: 50,
        },
        tooltip: {
            trigger: 'item',
        },
        xAxis: {
            type: 'category',
            data: groupData.map(item => item.name),
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ccc',
                    type: 'dashed',
                }
            },
            axisLabel: {
                color: '#999',
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                }
            }
        },
        series: [
            {
                type: 'bar',
                name: '期望薪资',
                data: groupData.map(item => item.hope_salary),
                itemStyle: {
                    color: genHopeSalaryBarColor()
                }
            },
            {
                type: 'bar',
                name: '就业薪资',
                data: groupData.map(item => item.salary),
                itemStyle: {
                    color: genSalaryBarColor()
                }
            }
        ]
    }

    linesChart.setOption(option)
}

function genHopeSalaryBarColor() {
    return {
        type: 'liner',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#499FEE'
            },
            {
                offset: 1,
                color: 'rgba(73,159,238,0.2)'
            }
        ]
    }
}

function genSalaryBarColor() {
    return {
        type: 'liner',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#34D39A'
            },
            {
                offset: 1,
                color: 'rgba(52,211,154,0.2)'
            }
        ]
    }
}

function renderGenderSalaryPies(salary) {
    const genderEle = document.querySelector('#gender')
    const genderChart = echarts.init(genderEle)

    const option = {
        title: [
            {
                text: '男女薪资分布',
                left: 10,
                top: 10,
                textStyle: {
                    fontSize: 16,
                },
            },
            {
                text: '男生',
                left: '50%',
                top: '45%',
                textAlign: 'center',
                textStyle: {
                    fontSize: 12,
                },
            },
            {
                text: '女生',
                left: '50%',
                top: '85%',
                textAlign: 'center',
                textStyle: {
                    fontSize: 12,
                },
            },
        ],
        tooltip: {
            trigger: 'item',
        },
        series: [
            {
                type: 'pie',
                radius: [
                    '20%',
                    '30%',
                ],
                center: [
                    '50%',
                    '30%'
                ],
                avoidLabelOverlap: true,
                label: {
                    show: true,
                    position: 'outside',
                },
                labelLine: {
                    show: true,
                },
                data: genMaleData(salary),
            },
            {
                type: 'pie',
                radius: [
                    '20%',
                    '30%',
                ],
                center: [
                    '50%',
                    '70%'
                ],
                avoidLabelOverlap: true,
                label: {
                    show: true,
                    position: 'outside',
                },
                labelLine: {
                    show: true,
                },
                data: genFemaleData(salary),
            },
        ],
        color: [
            '#FDA224',
            '#5097FF',
            '#3ABCFA',
            '#34D39A'
        ],
    }

    genderChart.setOption(option)
}

function genMaleData(salaries) {
    return salaries.map(salary => {
        return {
            value: salary.b_count,
            name: salary.label,
        }
    })
}

function genFemaleData(salaries) {
    return salaries.map(salary => {
        return {
            value: salary.g_count,
            name: salary.label,
        }
    })
}

function renderMap(provinceData) {
    fetch('/map/china.json')
        .then(res => res.json())
        .then(chinaJson => {
            echarts.registerMap('china', chinaJson)
            console.log('China map loaded')

            const mapEle = document.querySelector('#map')
            const mapChart = echarts.init(mapEle)

            const data = formatData(provinceData)
            console.log(getMaxProvince(data))

            const option = {
                title: {
                    text: '籍贯分布',
                    top: 10,
                    left: 10,
                    textStyle: {
                        fontSize: 16,
                    },
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {c} 位学员',
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    textStyle: {
                        color: '#fff',
                    },
                },
                visualMap: {
                    min: 0,
                    max: getMaxProvince(data),
                    bottom: '20',
                    text: [String(getMaxProvince(data)), '0'],
                    inRange: {
                        color: ['#ffffff', '#0075F0'],
                    },
                    show: true,
                    left: 40,
                },
                geo: {
                    map: 'china',
                    roam: false,
                    zoom: 1.0,
                    label: {
                        normal: {
                            show: true,
                            fontSize: '10',
                            color: 'rgba(0,0,0,0.7)',
                        },
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(0, 0, 0, 0.2)',
                            color: '#e0ffff',
                        },
                        emphasis: {
                            areaColor: '#34D39A',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
                series: [
                    {
                        type: 'map',
                        name: '籍贯分布',
                        geoIndex: 0,
                        data
                    }
                ]
            }

            mapChart.setOption(option)

        })
        .catch(error => console.error('Failed to load map:', error))
}

function formatData(provinces) {
    const originData = getOriginData()
    originData.forEach((item) => {
        const provinceObj = provinces.find(province => item.name === province.name || item.name.includes(province.name))

        if (provinceObj !== undefined) {
            item.value = provinceObj.value
        }
    })

    return originData
}

function getOriginData() {
    return [
        { name: '南海诸岛', value: 0 },
        { name: '北京市', value: 0 },
        { name: '天津市', value: 0 },
        { name: '上海市', value: 0 },
        { name: '重庆市', value: 0 },
        { name: '河北省', value: 0 },
        { name: '河南省', value: 0 },
        { name: '云南省', value: 0 },
        { name: '辽宁省', value: 0 },
        { name: '黑龙江省', value: 0 },
        { name: '湖南省', value: 0 },
        { name: '安徽省', value: 0 },
        { name: '山东省', value: 0 },
        { name: '新疆维吾尔自治区', value: 0 },
        { name: '江苏省', value: 0 },
        { name: '浙江省', value: 0 },
        { name: '江西省', value: 0 },
        { name: '湖北省', value: 0 },
        { name: '广西壮族自治区', value: 0 },
        { name: '甘肃省', value: 0 },
        { name: '山西省', value: 0 },
        { name: '内蒙古自治区', value: 0 },
        { name: '陕西省', value: 0 },
        { name: '吉林省', value: 0 },
        { name: '福建省', value: 0 },
        { name: '贵州省', value: 0 },
        { name: '广东省', value: 0 },
        { name: '青海省', value: 0 },
        { name: '西藏自治区', value: 0 },
        { name: '四川省', value: 0 },
        { name: '宁夏省', value: 0 },
        { name: '海南省', value: 0 },
        { name: '台湾特别行政区', value: 0 },
        { name: '香港特别行政区', value: 0 },
        { name: '澳门特别行政区', value: 0 },
    ]
}

function getMaxProvince(provinces) {
    return Math.max.apply(null, provinces.map(province => province.value))
}

const logoutBtn = document.querySelector('#logout')
logoutBtn.addEventListener('click', common.logout)