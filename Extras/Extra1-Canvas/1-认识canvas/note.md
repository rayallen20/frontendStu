# 1-认识canvas

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>1-认识canvas</title>
</head>
<body>
    <!--
        id: 标识元素
        width: canvas的宽度 该属性和style:width的含义不同
        height: canvas的高度 该属性和style:height的含义不同
    -->
    <canvas id="myCanvas" width="600" height="400" style="width: 600px; height: 400px"></canvas>
    <script>
        const canvasEle = document.querySelector('#myCanvas')

        // 获取canvas的上下文对象(相当于画笔)
        const ctx = canvasEle.getContext('2d')

        // 绘制图形
        // 前2个参数: 起点坐标
        // 第3个参数: 矩形宽度
        // 第4个参数: 矩形高度
        ctx.fillRect(50, 50, 400, 200)
    </script>
</body>
</html>
```