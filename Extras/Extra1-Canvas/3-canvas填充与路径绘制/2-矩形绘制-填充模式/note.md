# 2-矩形绘制-填充模式

## 1. 基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>1-基本使用</title>
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
    
    ctx.fillStyle = 'skyblue'
    ctx.fillRect(50, 50, 400, 200)
</script>
</body>
</html>
```

## 2. 先创建路径再填充

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>2-先绘制路径再填充</title>
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

    ctx.fillStyle = 'skyblue'

    // rect()方法用于将一个矩形添加到当前路径 并不负责渲染
    ctx.rect(50, 50, 400, 200)
    
    // fill()方法用于填充当前路径
    ctx.fill()
</script>
</body>
</html>
```