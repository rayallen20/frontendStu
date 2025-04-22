/**
 * 本方法用于绘制气泡框的路径
 * @param {Object} points - 气泡框的各个点坐标
 * @property {Object} point.start - 起始点坐标
 * @property {Object} point.p1 - 控制点1坐标 其他类似
 * @return {Path2D} path - 绘制的路径对象
 * */
function drawBubble(points) {
    const path = new Path2D()
    // 绘制气泡框左下部分
    drawQuadratic(path, points.start, points.p1, points.p2)

    // 绘制气泡框左上部分
    drawQuadratic(path, points.p2, points.p3, points.p4)

    drawLine(path, points.p4, points.p5)

    // 绘制气泡框右上部分
    drawQuadratic(path, points.p5, points.p6, points.p7)

    // 绘制气泡框右下部分
    drawQuadratic(path, points.p7, points.p8, points.p9)

    // 绘制气泡框下侧 右边的弧线
    drawQuadratic(path, points.p9, points.p10, points.p11)

    // 绘制气泡框下侧 左边的弧线
    drawQuadratic(path, points.p11, points.p12, points.start)

    return path
}

/**
 * 本方法用于在给定的路径上绘制二次贝塞尔曲线
 * @param {Path2D} path - 给定的路径对象
 * @param {Object} start - 起点坐标
 * @param {Object} p1 - 控制点p1的坐标
 * @param {Object} p2 - 控制点p2的坐标
 * @return {void}
 * */
function drawQuadratic(path, start, p1, p2) {
    path.moveTo(start.x, start.y)
    path.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y)
}

/**
 * 本方法用于在给定的路径上绘制直线
 * @param {Path2D} path - 给定的路径对象
 * @param {Object} start - 起点坐标
 * @param {Object} end - 终点坐标
 * @return {void}
 * */
function drawLine(path, start, end) {
    // ctx.moveTo(start.x, start.y)
    path.lineTo(end.x, end.y)
}
