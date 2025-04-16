# 1-绘制圆弧

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>1-绘制圆弧</title>
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

    // 前2个参数: 圆心坐标
    // 第3个参数: 半径
    // 第4个参数: 起始角度(弧度制)
    // 第5个参数: 结束角度(弧度制)
    // 第6个参数: 是否顺时针绘制 true:逆时针 false:顺时针 默认值:false
    // 注意: 本方法和rect()方法一样 也是仅绘制路径而不填充
    // 这里需要注意的是: 角度永远是顺时针计算的 第6个参数调整的是绘制的方向
    // 也就是说 一旦角度确定了 就意味着起点和终点确定了 调整方向的效果就是得到不同的圆弧了
    ctx.beginPath()
    ctx.arc(300, 200, 50, 0, 0.5 * Math.PI, false)
    ctx.strokeStyle = 'pink'
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.arc(100, 100, 50, 0, 0.5 * Math.PI, true)
    ctx.strokeStyle = 'pink'
    ctx.stroke()
    ctx.closePath()
</script>
</body>
</html>
```