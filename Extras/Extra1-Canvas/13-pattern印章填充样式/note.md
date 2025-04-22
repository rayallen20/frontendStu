# 13-pattern印章填充样式

- `Image()`构造函数: 等价于`document.createElement('img')`
  - `img`元素的`onload`事件: 在图片加载完成后触发
- `createPattern(image, repetition)`: 使用指定的图像创建一个图案
  - `image`: 图像对象，可以是`HTMLImageElement`/`HTMLCanvasElement`/`HTMLVideoElement`等
  - `repetition`: 图案的重复方式, 可以是以下值之一:
    - `repeat`: 水平和垂直方向都重复
    - `repeat-x`: 仅在水平方向上重复
    - `repeat-y`: 仅在垂直方向上重复
    - `no-repeat`: 不重复