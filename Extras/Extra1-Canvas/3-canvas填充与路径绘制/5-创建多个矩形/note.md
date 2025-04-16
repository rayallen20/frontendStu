# 5-创建多个矩形

- 使用`ctx.rect()`方法创建多个图形时,需要创建一个新的路径,否则会将所有图形绘制在一起

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>1-创建多个矩形</title>
</head>
<body>
<canvas id="myCanvas" width="900" height="400" style="width: 700px; height: 400px">

</canvas>

<script>
    const canvasEle = document.querySelector('#myCanvas')

    if (canvasEle.getContext === undefined) {
        alert('当前浏览器不支持canvas')
    }

    const ctx = canvasEle.getContext('2d')

    // 绘制一个路径矩形
    ctx.strokeStyle = 'skyblue'
    ctx.rect(50, 50, 400, 200)
    ctx.stroke()

    // 绘制一个填充矩形
    ctx.fillStyle = 'orange'
    ctx.rect(250, 150, 400, 200)
    ctx.fill()
</script>
</body>
</html>
```

此时,有2个问题:

- 路径矩形也变成填充矩形了
- 路径矩形的边框颜色变成了填充矩形的颜色

- 原因: 在绘制2个矩形时,没有创建新的路径

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>1-创建多个矩形</title>
</head>
<body>
<canvas id="myCanvas" width="900" height="400" style="width: 700px; height: 400px">

</canvas>

<script>
    const canvasEle = document.querySelector('#myCanvas')

    if (canvasEle.getContext === undefined) {
        alert('当前浏览器不支持canvas')
    }

    const ctx = canvasEle.getContext('2d')

    // 创建新的路径 绘制一个路径矩形
    ctx.beginPath()
    ctx.strokeStyle = 'skyblue'
    ctx.rect(50, 50, 400, 200)
    ctx.stroke()
    // 路径结束
    ctx.closePath()

    // 创建新的路径 绘制一个填充矩形
    ctx.beginPath()
    ctx.fillStyle = 'orange'
    ctx.rect(250, 150, 400, 200)
    ctx.fill()
    // 路径结束
    ctx.closePath()
</script>
</body>
</html>
```