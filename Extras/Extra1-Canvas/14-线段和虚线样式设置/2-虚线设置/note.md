# 2-虚线设置

- `setLineDash([])`: 线和间隙的交替长度
  - 通常这个数组只需要2个元素即可
  - 第一个元素表示线段的长度
  - 第二个元素表示间隙的长度
  - 这个数组设置为`[]`时表示恢复实线
- `lineDashOffset`: 设置虚线的偏移量
  - 这个偏移的方向是指沿线段的绘制方向
  - 这个偏移不是位移,而是指在虚线的起始位置,虚线偏移多少个像素
- [绘制蚂蚁线](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset#%E8%9A%82%E8%9A%81%E7%BA%BF)