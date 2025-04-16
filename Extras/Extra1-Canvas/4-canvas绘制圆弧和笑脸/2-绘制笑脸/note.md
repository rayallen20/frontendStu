# 2-绘制笑脸

## 1. 使用`beginPath()`和`closePath()`方法绘制多个不连续的路径

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>2-绘制笑脸</title>
</head>
<body>
<canvas id="myCanvas" width="600" height="400" style="width: 600px; height: 400px">

</canvas>
<script>
    const canvasEle = document.querySelector('#myCanvas')

    if (canvasEle.getContext === undefined) {
        alert('当前浏览器不支持canvas')
    }

    const ctx = canvasEle.getContext('2d')

    drawFace(ctx)
    drawLeftEye(ctx)
    drawRightEye(ctx)
    drawSmile(ctx)

    function drawFace(ctx) {
        ctx.beginPath()
        ctx.arc(300, 200, 200, 0, Math.PI * 2, false)
        ctx.strokeStyle = 'black'
        ctx.stroke()
        ctx.closePath()
    }

    function drawLeftEye(ctx) {
        ctx.beginPath()
        ctx.arc(200, 150, 20, 0, Math.PI, true)
        ctx.strokeStyle = 'black'
        ctx.stroke()
        ctx.closePath()
    }

    function drawRightEye(ctx) {
        ctx.beginPath()
        ctx.arc(400, 150, 20, 0, Math.PI, true)
        ctx.strokeStyle = 'black'
        ctx.stroke()
        ctx.closePath()
    }

    function drawSmile(ctx) {
        ctx.beginPath()
        ctx.arc(300, 250, 50, 0.2 * Math.PI, 0.8 * Math.PI, false)
        ctx.lineWidth = 10
        ctx.strokeStyle = 'skyblue'
        ctx.stroke()
        ctx.closePath()
    }
</script>
</body>
</html>
```

## 2. 使用`moveTo()`方法绘制多个不连续的路径

- 核心思路: 使用`moveTo()`方法将路径移动到指定的坐标,再开始绘制
  - 最后绘制笑脸时,若使用`moveTo()`的方式,则需要计算起点坐标

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>3-使用moveTo创建新路径</title>
</head>
<body>
<canvas id="myCanvas" width="600" height="400" style="width: 600px; height: 400px">

</canvas>
<script>
    const canvasEle = document.querySelector('#myCanvas')

    if (canvasEle.getContext === undefined) {
        alert('当前浏览器不支持canvas')
    }

    const ctx = canvasEle.getContext('2d')

    drawFace(ctx)
    drawLeftEye(ctx)
    drawRightEye(ctx)
    drawSmile(ctx)

    function drawFace(ctx) {
        ctx.beginPath()
        ctx.arc(300, 200, 200, 0, Math.PI * 2, false)
        ctx.strokeStyle = 'black'
        ctx.stroke()
    }

    function drawLeftEye(ctx) {
        // moveTo: 在给定的(x, y)坐标处开始一个新的子路径
        ctx.moveTo(220, 150)
        ctx.arc(200, 150, 20, 0, Math.PI, true)
        ctx.strokeStyle = 'black'
        ctx.stroke()
    }

    function drawRightEye(ctx) {
        ctx.moveTo(420, 150)
        ctx.arc(400, 150, 20, 0, Math.PI, true)
        ctx.strokeStyle = 'black'
        ctx.stroke()
        ctx.closePath()
    }

    function drawSmile(ctx) {
        ctx.beginPath()
        // 这个计算方式是对的
        // ctx.moveTo(300 + 50 * Math.sin(0.2 * Math.PI), 250 + 50 * Math.cos(0.2 * Math.PI))
        ctx.arc(300, 250, 50, 0.2 * Math.PI, 0.8 * Math.PI, false)
        ctx.lineWidth = 10
        ctx.strokeStyle = 'skyblue'
        ctx.stroke()
        ctx.closePath()
    }
</script>
</body>
</html>
```