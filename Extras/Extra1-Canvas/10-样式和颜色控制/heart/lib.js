/**
 * 本方法用于绘制心形的路径
 * @param {Object} points 绘制心形时的起点及控制点集合
 * @property {Object} point.start - 起点
 * @property {Object} point.p1 - 控制点1 其他控制点类似
 * @return {Path2D} path - 返回绘制的路径对象
 * */
function drawHeart(points) {
    const path = new Path2D()
    drawCube(path, points.start, points.p1, points.p2, points.p3)
    drawCube(path, points.p3, points.p4, points.p5, points.start)
    return path
}

/**
 * 本方法用于在给定的路径上绘制三次贝塞尔曲线
 * @param {Path2D} path - 绘制路径对象
 * @param {Object} start - 起点
 * @param {Object} p1 - 控制点1
 * @param {Object} p2 - 控制点2
 * @param {Object} p3 - 控制点3
 * */
function drawCube(path, start, p1, p2, p3) {
    path.moveTo(start.x, start.y)
    path.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
}