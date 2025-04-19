# 2-绘制三角形

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>2-绘制三角形</title>
</head>
<body>
<canvas id="myCanvas"  width="600" height="400"></canvas>
<script>
    const canvasEle = document.querySelector('#myCanvas')

    if (canvasEle.getContext === undefined) {
        alert('当前浏览器不支持canvas')
    }

    const ctx = canvasEle.getContext('2d')

    ctx.beginPath()

    ctx.moveTo(25, 25)
    ctx.lineTo(105, 25)
    ctx.lineTo(105, 100)

    // 这一行写或者不写效果都是一样的
    // 因为填充本身就是从起点填充到终点
    // ctx.lineTo(25, 25)

    // 只有填充能从起点填充到终点
    // 如果只是绘制路径 则不会自动连接起点和终点
    // 也就是说 如果是绘制路径 则上面的 ctx.lineTo(25, 25) 是不能省的
    ctx.fillStyle = 'skyblue'
    ctx.fill()
    ctx.closePath()

    // 和绘制路径的比对
    ctx.beginPath()

    ctx.moveTo(225, 225)
    ctx.lineTo(325, 225)
    ctx.lineTo(325, 325)
    // 绘制路径时 则必须手动连接起点和终点
    // 否则绘制出来的只是2条线段
    ctx.lineTo(225, 225)

    ctx.strokeStyle = 'pink'
    ctx.lineWidth = 5
    ctx.stroke()

    ctx.closePath()
</script>
</body>
</html>
```