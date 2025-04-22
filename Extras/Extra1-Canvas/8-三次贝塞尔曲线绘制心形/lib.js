const canvasEle = document.querySelector('#myCanvas')
if (canvasEle.getContext === undefined) {
    alert('当前浏览器不支持canvas')
}

const ctx = canvasEle.getContext('2d')
ctx.font = '14px san-serif'
ctx.fillStyle = 'red'

/**
 * 本方法用于绘制心形
 * @param {Object} points 绘制心形时的起点及控制点集合
 * @property {Object} point.start - 起点
 * @property {Object} point.p1 - 控制点1 其他控制点类似
 * */
function drawHeart(points) {
    drawBezierCurve(points.start, points.p1, points.p2, points.p3)
    drawBezierCurve(points.p3, points.p4, points.p5, points.start)
}

/**
 * 本方法用于绘制三次贝塞尔曲线
 * @param {Object} start - 起点
 * @param {Object} p1 - 控制点1
 * @param {Object} p2 - 控制点2
 * @param {Object} p3 - 控制点3
 * */
function drawBezierCurve(start, p1, p2, p3) {
    if (ctx.fillStyle !== 'red') {
        ctx.fillStyle = 'red'
    }

    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
}

/**
 * 本方法用于绘制在绘制心形时使用的辅助线
 * @param {Object} points 绘制心形时的起点及控制点集合
 * @property {Object} point.start - 起点
 * @property {Object} point.p1 - 控制点1 其他控制点类似
 * */
function drawHeartSubline(points) {
    drawSubline(points.start, points.p1)
    drawSubline(points.p1, points.p2)
    drawSubline(points.p2, points.p3)
    drawSubline(points.p3, points.p4)
    drawSubline(points.p4, points.p5)
    drawSubline(points.p5, points.start)
}

/**
 * 本方法用于绘制辅助线(为便于展示三次贝塞尔曲线的控制点)
 * @param {Object} start - 起点坐标
 * @param {Object} end - 终点坐标
 * @return {void}
 * */
function drawSubline(start, end) {
    ctx.setLineDash([5, 3])
    const defaultStrokeStyle = '#000000'
    const defaultLineWidth = 1

    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.strokeStyle = 'green'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.closePath()

    ctx.strokeStyle = defaultStrokeStyle
    ctx.lineWidth = defaultLineWidth
    ctx.setLineDash([])
}

/**
 * 本方法用于在绘制心形时使用的起点和控制点坐标
 * @param {Object} points 绘制心形时的起点及控制点集合
 * @property {Object} point.start - 起点
 * @property {Object} point.p1 - 控制点1 其他控制点类似
 * */
function drawHeartLabelPoint(points) {
    labelPoint(points.start)
    labelPoint(points.p1)
    labelPoint(points.p2)
    labelPoint(points.p3)
    labelPoint(points.p4)
    labelPoint(points.p5)
}

/**
 * 本方法用于绘制点的坐标
 * @param {Object} point - 点的坐标
 * @property {number} point.x - 点的x坐标
 * @property {number} point.y - 点的y坐标
 * @return {void}
 * */
function labelPoint(point) {
    const defaultFillStyle = '#000000'
    ctx.fillStyle = 'blue'
    ctx.fillText(`${point.name}(${point.x},${point.y})`, point.x + point.offsetOnX, point.y + point.offsetOnY)
    ctx.fillStyle = defaultFillStyle
}