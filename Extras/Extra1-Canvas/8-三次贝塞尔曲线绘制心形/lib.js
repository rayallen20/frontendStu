const canvasEle = document.querySelector('#myCanvas')
if (canvasEle.getContext === undefined) {
    alert('当前浏览器不支持canvas')
}

const ctx = canvasEle.getContext('2d')
ctx.font = '14px san-serif'

/**
 * 本方法用于绘制心形
 * @param {Object} start - 起点
 * @param {Object} p1 - 控制点1
 * @param {Object} p2 - 控制点2
 * @param {Object} p3 - 控制点3
 * @param {Object} p4 - 控制点4
 * @param {Object} p5 - 控制点5
 * */
function drawHeart(start, p1, p2, p3, p4, p5) {
    drawBezierCurve(startPoint, p1, p2, p3)
    ctx.fillStyle = 'red'
    ctx.fill()
    drawBezierCurve(p3, p4, p5, startPoint)
    ctx.fill()
}

/**
 * 本方法用于绘制三次贝塞尔曲线
 * @param {Object} start - 起点
 * @param {Object} p1 - 控制点1
 * @param {Object} p2 - 控制点2
 * @param {Object} p3 - 控制点3
 * */
function drawBezierCurve(start, p1, p2, p3) {
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
    ctx.stroke()
    ctx.closePath()
}

/**
 * 本方法用于绘制在绘制心形时使用的辅助线
 * @param {Object} start - 起点
 * @param {Object} p1 - 控制点1
 * @param {Object} p2 - 控制点2
 * @param {Object} p3 - 控制点3
 * @param {Object} p4 - 控制点4
 * @param {Object} p5 - 控制点5
 * */
function drawHeartSubline(start, p1, p2, p3, p4, p5) {
    drawSubline(startPoint, p1)
    drawSubline(p1, p2)
    drawSubline(p2, p3)
    drawSubline(p3, p4)
    drawSubline(p4, p5)
    drawSubline(p5, startPoint)
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
 * @param {Object} start - 起点
 * @param {Object} p1 - 控制点1
 * @param {Object} p2 - 控制点2
 * @param {Object} p3 - 控制点3
 * @param {Object} p4 - 控制点4
 * @param {Object} p5 - 控制点5
 * */
function drawHeartLabelPoint(start, p1, p2, p3, p4, p5) {
    labelPoint(startPoint)
    labelPoint(p1)
    labelPoint(p2)
    labelPoint(p3)
    labelPoint(p4)
    labelPoint(p5)
}

/**
 * 本方法用于绘制点的坐标 格式:(x,y)
 * @param {Object} point - 点的坐标
 * @return {void}
 * */
function labelPoint(point) {
    const defaultFillStyle = '#000000'
    ctx.fillStyle = 'blue'
    ctx.fillText(`${point.name}(${point.x},${point.y})`, point.x + point.offsetOnX, point.y + point.offsetOnY)
    ctx.fillStyle = defaultFillStyle
}