const canvasEle = document.querySelector('#myCanvas')
if (canvasEle.getContext === undefined) {
    alert('当前浏览器不支持canvas')
}

const ctx = canvasEle.getContext('2d')
ctx.font = '14px san-serif'

/**
 * 本方法用于绘制气泡框
 * @param {Object} points - 气泡框的各个点坐标
 * @property {Object} start - 起始点坐标
 * @property {Object} p1 - 控制点1坐标 其他类似
 * */
function drawBubble(points) {
    // 绘制气泡框左下部分
    drawBezierCurve(points.start, points.p1, points.p2)

    // 绘制气泡框左上部分
    drawBezierCurve(points.p2, points.p3, points.p4)
    
    drawLine(points.p4, points.p5)

    // 绘制气泡框右上部分
    drawBezierCurve(points.p5, points.p6, points.p7)

    // 绘制气泡框右下部分
    drawBezierCurve(points.p7, points.p8, points.p9)

    // 绘制气泡框下侧 右边的弧线
    drawBezierCurve(points.p9, points.p10, points.p11)

    // 绘制气泡框下侧 左边的弧线
    drawBezierCurve(points.p11, points.p12, points.start)
}

/**
 * 本方法用于绘制二次贝塞尔曲线
 * @param {Object} start - 起点坐标
 * @param {Object} p1 - 控制点p1的坐标
 * @param {Object} p2 - 控制点p2的坐标
 * @return {void}
 * */
function drawBezierCurve(start, p1, p2) {
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y)
    ctx.stroke()
    ctx.closePath()
}

/**
 * 本方法用于绘制直线
 * @param {Object} start - 起点坐标
 * @param {Object} end - 终点坐标
 * @return {void}
 * */
function drawLine(start, end) {
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()
    ctx.closePath()
}

/**
 * 本方法用于在绘制气泡框时绘制辅助线
 * @param {Object} points - 气泡框的各个点坐标
 * @property {Object} start - 起始点坐标
 * @property {Object} p1 - 控制点1坐标 其他类似
 * */
function drawBubbleSubline(points) {
    drawSubline(points.start, points.p1)
    drawSubline(points.p1, points.p2)
    drawSubline(points.p2, points.p3)
    drawSubline(points.p3, points.p4)
    drawSubline(points.p5, points.p6)
    drawSubline(points.p6, points.p7)
    drawSubline(points.p7, points.p8)
    drawSubline(points.p8, points.p9)
    drawSubline(points.p9, points.p10)
    drawSubline(points.p10, points.p11)
    drawSubline(points.p12, points.start)
}

/**
 * 本方法用于绘制辅助线(为便于展示二次贝塞尔曲线的控制点)
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
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.closePath()

    ctx.strokeStyle = defaultStrokeStyle
    ctx.lineWidth = defaultLineWidth
    ctx.setLineDash([])
}

/**
 * 本方法用于在绘制气泡框时绘制控制点坐标
 * @param {Object} points - 气泡框的各个点坐标
 * @property {Object} start - 起始点坐标
 * @property {Object} p1 - 控制点1坐标 其他类似
 * */
function drawBubblePoint(points) {
    labelPoint(points.start)
    labelPoint(points.p1)
    labelPoint(points.p2)
    labelPoint(points.p3)
    labelPoint(points.p4)
    labelPoint(points.p5)
    labelPoint(points.p6)
    labelPoint(points.p7)
    labelPoint(points.p8)
    labelPoint(points.p9)
    labelPoint(points.p10)
    labelPoint(points.p11)
    labelPoint(points.p12)
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