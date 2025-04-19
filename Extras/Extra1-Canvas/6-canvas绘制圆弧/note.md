# 6-canvas绘制圆弧

- `arcTo(x1, y1, x2, y2, radius)`:
  - `x1`、`y1`: 第1个控制点的坐标
  - `x2`、`y2`: 第2个控制点的坐标
  - `radius`: 绘制圆弧的半径
  - 从起始点到第1个控制点的线段为L1
  - 从第1个控制点到第2个控制点的线段为L2
  - 绘制出的圆弧与L1和L2都相切
- [原理示意图](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arcTo#%E7%BB%93%E6%9E%9C)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>1-基本使用</title>
    <style>
        #myCanvas {
            display: block;
            margin: 100px auto;
        }
    </style>
</head>
<body>
<canvas id="myCanvas"  width="600" height="400"></canvas>
<script>
    const canvasEle = document.querySelector('#myCanvas')

    if (canvasEle.getContext === undefined) {
        alert('当前浏览器不支持canvas')
    }

    const ctx = canvasEle.getContext('2d')

    // 切线L1: 从起始点到控制点P1
    ctx.beginPath()
    ctx.moveTo(300, 200)
    ctx.lineTo(300, 400)
    ctx.stroke()
    ctx.closePath()

    // 切线L2: 从控制点P1到控制点P2
    ctx.beginPath()
    ctx.moveTo(300, 400)
    ctx.lineTo(100, 400)
    ctx.stroke()
    ctx.closePath()

    // 绘制圆弧
    ctx.beginPath()
    ctx.moveTo(300, 200)
    ctx.arcTo(300, 400, 100, 400, 200)
    ctx.stroke()
    ctx.closePath()

</script>
</body>
</html>
```