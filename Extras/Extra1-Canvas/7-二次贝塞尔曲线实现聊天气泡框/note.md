# 7-二次贝塞尔曲线实现聊天气泡框

![二次贝塞尔曲线示意图](https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667150886162-f5d91ebd-e23a-4468-9749-f20c62dbd7d1.gif)

- 大致原理:
  - 设t为0.1(t表示时间),则有:
  - step1. 取向量P0P1的1/10的位置,设该点为P0'
  - step2. 取向量P1P2的1/10的位置,设该点为P1'
  - step3. 连接P0'和P1',得到向量P0'P1'
  - step4. 取向量P0'P1'的1/10的位置,该点即为二次贝塞尔曲线在t=0.1时的点

- `quadraticCurveTo(x1, y1, x2, y2)`: 绘制2次贝塞尔曲线
  - x1, y1: 控制点坐标,即示意图中的P1
  - x2, y2: 终点坐标,即示意图中的P2
  - 示意图中的P0是起点坐标,即`moveTo(x0, y0)`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>1-聊天气泡框</title>
    <style>
        #myCanvas {
            display: block;
            margin: 100px auto;
            border: 1px solid darkseagreen;
        }

        #showSubLine {
            position: fixed;
            top: 0;
            left: 0;
        }

        #showPosition {
            position: fixed;
            top: 20px;
            left: 0;
        }
    </style>
</head>
<body>
<canvas id="myCanvas"  width="600" height="500"></canvas>
<div id="showSubLine">
    显示辅助线:<input type="checkbox" name="showSubLine" checked>
</div>

<div id="showPosition">
    显示坐标:<input type="checkbox" name="showPosition" checked>
</div>
<script>
    const canvasEle = document.querySelector('#myCanvas')
    if (canvasEle.getContext === undefined) {
        alert('当前浏览器不支持canvas')
    }

    const showSubLineEle = document.querySelector('input[name="showSubLine"]')
    const showPositionEle = document.querySelector('input[name="showPosition"]')

    showSubLineEle.addEventListener('change', () => {
        const showSubLine = showSubLineEle.checked
        const showPosition = showPositionEle.checked
        ctx.clearRect(0, 0, 600, 500)

        drawLeftBottom(showPosition, showSubLine)
        drawLeftTop(showPosition, showSubLine)
        drawLine(p4, p5)
        drawRightTop(showPosition, showSubLine)
        drawRightBottom(showPosition, showSubLine)
        drawRightArc(showPosition, showSubLine)
        drawLeftArc(showPosition, showSubLine)
    })

    showPositionEle.addEventListener('change', () => {
        const showSubLine = showSubLineEle.checked
        const showPosition = showPositionEle.checked
        ctx.clearRect(0, 0, 600, 500)

        drawLeftBottom(showPosition, showSubLine)
        drawLeftTop(showPosition, showSubLine)
        drawLine(p4, p5)
        drawRightTop(showPosition, showSubLine)
        drawRightBottom(showPosition, showSubLine)
        drawRightArc(showPosition, showSubLine)
        drawLeftArc(showPosition, showSubLine)
    })

    const ctx = canvasEle.getContext('2d')
    ctx.font = '14px san-serif'

    const start = {
        x: 300,
        y: 300,
        offsetOnX: -30,
        offsetOnY: 20,
        name: 'start',
    }

    const p1 = {
        x: 200,
        y: 300,
        offsetOnX: -40,
        offsetOnY: 20,
        name: 'P1',
    }

    const p2 = {
        x: 200,
        y: 200,
        offsetOnX: -85,
        offsetOnY: 0,
        name: 'P2',
    }
    drawLeftBottom(true, true)

    const p3 = {
        x: 200,
        y: 100,
        offsetOnX: -70,
        offsetOnY: -10,
        name: 'P3',
    }

    const p4 = {
        x: 300,
        y: 100,
        offsetOnX: -30,
        offsetOnY: -10,
        name: 'P4',
    }
    drawLeftTop(true, true)

    const p5 = {
        x: 400,
        y: 100,
        offsetOnX: -30,
        offsetOnY: -10,
        name: 'P5',
    }

    const p6 = {
        x: 500,
        y: 100,
        offsetOnX: 0,
        offsetOnY: -10,
        name: 'P6',
    }

    const p7 = {
        x: 500,
        y: 200,
        offsetOnX: 10,
        offsetOnY: 0,
        name: 'P7',
    }
    drawLine(p4, p5)
    drawRightTop(true, true)

    const p8 = {
        x: 500,
        y: 300,
        offsetOnX: 10,
        offsetOnY: 20,
        name: 'P8',
    }

    const p9 = {
        x: 400,
        y: 300,
        offsetOnX: -20,
        offsetOnY: 20,
        name: 'P9',
    }
    drawRightBottom(true, true)

    const p10 = {
        x: 400,
        y: 400,
        offsetOnX: 10,
        offsetOnY: 5,
        name: 'P10',
    }

    const p11 = {
        x: 250,
        y: 400,
        offsetOnX: -90,
        offsetOnY: 5,
        name: 'P11',
    }
    drawRightArc(true, true)

    const p12 = {
        x: 325,
        y: 400,
        offsetOnX: -20,
        offsetOnY: 25,
        name: 'P12',
    }
    drawLeftArc(true, true)

    /**
     * 本方法用于绘制气泡框左下部分
     * @param {boolean} showPosition - 是否显示坐标
     * @param {boolean} showSubline - 是否显示辅助线
     * */
    function drawLeftBottom(showPosition, showSubline) {
        if (showPosition) {
            labelPoint(start)
            labelPoint(p1)
            labelPoint(p2)
        }

        if (showSubline) {
            drawSubline(start, p1)
            drawSubline(p1, p2)
        }
        drawBezierCurve(start, p1, p2)
    }

    /**
     * 本方法用于绘制气泡框左上部分
     * @param {boolean} showPosition - 是否显示坐标
     * @param {boolean} showSubline - 是否显示辅助线
     * */
    function drawLeftTop(showPosition, showSubline) {
        if (showPosition) {
            labelPoint(p3)
            labelPoint(p4)
        }

        if (showSubline) {
            drawSubline(p2, p3)
            drawSubline(p3, p4)
        }
        drawBezierCurve(p2, p3, p4)
    }

    /**
     * 本方法用于绘制气泡框右上部分
     * @param {boolean} showPosition - 是否显示坐标
     * @param {boolean} showSubline - 是否显示辅助线
     * */
    function drawRightTop(showPosition, showSubline) {
        if (showPosition) {
            labelPoint(p5)
            labelPoint(p6)
            labelPoint(p7)
        }

        if (showSubline) {
            drawSubline(p5, p6)
            drawSubline(p6, p7)
        }
        drawBezierCurve(p5, p6, p7)
    }

    /**
     * 本方法用于绘制气泡框右下部分
     * @param {boolean} showPosition - 是否显示坐标
     * @param {boolean} showSubline - 是否显示辅助线
     * */
    function drawRightBottom(showPosition, showSubline) {
        if (showPosition) {
            labelPoint(p8)
            labelPoint(p9)
        }

        if (showSubline) {
            drawSubline(p7, p8)
            drawSubline(p8, p9)
        }
        drawBezierCurve(p7, p8, p9)
    }

    /**
     * 本方法用于绘制气泡框下侧,右边的弧线
     * @param {boolean} showPosition - 是否显示坐标
     * @param {boolean} showSubline - 是否显示辅助线
     * */
    function drawRightArc(showPosition, showSubline) {
        if (showPosition) {
            labelPoint(p10)
            labelPoint(p11)
        }

        if (showSubline) {
            drawSubline(p9, p10)
            drawSubline(p10, p11)
        }
        drawBezierCurve(p9, p10, p11)
    }

    /**
     * 本方法用于绘制气泡框下侧,左边的弧线
     * @param {boolean} showPosition - 是否显示坐标
     * @param {boolean} showSubline - 是否显示辅助线
     * */
    function drawLeftArc(showPosition, showSubline) {
        if (showPosition) {
            labelPoint(p12)
        }

        if (showSubline) {
            drawSubline(p12, start)
        }
        drawBezierCurve(p11, p12, start)
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
</script>
</body>
</html>
```