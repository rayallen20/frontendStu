# 16-canvas绘制图片的3种方式

- `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`:
  - `image`: 要绘制的图片对象
  - `sx`: 源图像的起始x坐标
  - `sy`: 源图像的起始y坐标
    - 这两个参数是用于裁剪源图像的,设置裁剪的起始点
  - `sWidth`: 源图像的宽度
  - `sHeight`: 源图像的高度
    - 这两个参数是用于裁剪源图像的,设置裁剪的宽高
  - `dx`: 目标画布的起始x坐标
  - `dy`: 目标画布的起始y坐标
    - 这两个参数是用于控制源图像在画布上的位置的
  - `dWidth`: 目标画布的宽度
  - `dHeight`: 目标画布的高度
    - 这两个参数是用于控制源图像在画布上的缩放的

![参数示意图](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage/canvas_drawimage.jpg)