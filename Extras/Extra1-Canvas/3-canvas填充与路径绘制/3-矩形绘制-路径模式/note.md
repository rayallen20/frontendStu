# 3-矩形绘制-路径模式

## 1. 基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>3-矩形绘制-路径模式</title>
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

    // 矩形绘制-路径模式
    ctx.strokeStyle = 'skyblue'
    // 和fillRect()一样
    // 前2个参数表示矩形的左上角坐标
    // 第3个参数表示矩形的宽度
    // 第4个参数表示矩形的高度
    ctx.strokeRect(50, 50, 400, 200)
</script>
</body>
</html>
```

## 2. 先创建路径再绘制

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>2-先创建路径再绘制</title>
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

    ctx.strokeStyle = 'skyblue'

    // 创建路径
    ctx.rect(50, 50, 400, 200)

    // 绘制路径
    ctx.stroke()
</script>
</body>
</html>
```