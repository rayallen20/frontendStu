# 2-canvas上下文对象与浏览器支持

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>2-canvas上下文对象与浏览器支持</title>
</head>
<body>
    <canvas id="myCanvas" width="600" height="400" style="width: 600px; height: 400px">

    </canvas>
<script>
    const canvasEle = document.querySelector('#myCanvas')

    // 判断浏览器是否支持canvas
    if (canvasEle.getContext === undefined) {
        alert('当前浏览器不支持canvas')
    }

    const ctx = canvasEle.getContext('2d')

    ctx.fillStyle = 'skyblue'
    ctx.fillRect(50, 50, 400, 200)
</script>
</body>
</html>
```