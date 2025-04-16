# 4-擦除矩形区域

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>4-擦除矩形区域</title>
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

    ctx.strokeStyle = 'skyblue'
    ctx.strokeRect(50, 50, 400, 200)

    ctx.fillStyle = 'orange'
    ctx.fillRect(250, 150, 400, 200)

    // canvasEle.clientWidth: canvas元素的可见宽度,即style设置的width属性
    console.log(canvasEle.width)        // 900

    // canvasEle.width: canvas元素的实际绘图区域宽度,即canvas元素的width属性
    console.log(canvasEle.clientWidth)  // 700

    // clearRect():通过把像素设置为透明黑色以达到擦除一个矩形区域的目的
    // 这里的Rect表示擦除规则按照矩形区域进行 并非表示擦除矩形对象
    // 换言之 如果上面的代码绘制了一个圆形 同样可以使用clearRect()方法擦除
    // ctx.clearRect(0, 0, canvasEle.width, canvasEle.height)

    // 使用定时器实现逐渐擦除的效果
    let clearHeight = 0
    let interval = setInterval(() => {
        if (clearHeight >= canvasEle.height) {
            clearInterval(interval)
        }

        // 不能直接使用clearHeight同时作为清除区域的起点Y值和高度 这个思路是不对的
        // - 第一次: 起点(0, 0),清除高度0
        // - 第二次: 起点(0, 50),清除高度50
        // - 第三次: 起点(0, 100),清除高度100
        ctx.clearRect(0, 0, canvasEle.width, clearHeight)

        clearHeight++
    }, 10)

</script>
</body>
</html>
```

- TODO: 我还是不明白`ctx.clearRect(0, clearHeight, canvasEle.width, clearHeight)`为什么不能擦除strokeRect的上边框