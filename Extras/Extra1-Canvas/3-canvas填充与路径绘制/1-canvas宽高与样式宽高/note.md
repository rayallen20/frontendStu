# 1-canvas宽高与样式宽高

- 当canvas的宽高和样式宽高不一致时,canvas会等比缩放或拉伸

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>3-canvas宽高与样式宽高</title>
</head>
<body>
<!-- 等比缩放 -->
<canvas id="myCanvas" width="600" height="400" style="width: 300px; height: 200px">

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

- 可以类比为一张图片,该图片的大小是600*400,但是在浏览器中显示的大小是300*200,那么浏览器会等比缩放该图片,使其在300*200的区域内显示