# 1-线性渐变

- `createLinearGradient(x0, y0, x1, y1)`: 创建一个线性渐变对象,参数为渐变的起始和结束坐标
  - `x0, y0`: 渐变起始点坐标
  - `x1, y1`: 渐变结束点坐标
  - 渐变坐标是全局的,即相对于当前的坐标空间.当应用于形状时,这些坐标并不是相对于形状本身的坐标
- `addColorStop(offset, color)`: 向渐变对象添加颜色停止点
  - `offset`: 停止点位置,范围从0到1
  - `color`: 停止点的颜色

![渐变的起点和终点](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createLinearGradient/mdn-canvas-lineargradient.png)