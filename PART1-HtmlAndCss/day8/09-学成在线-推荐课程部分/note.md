# 09-学成在线-推荐课程部分

## 1. 结构

- 版心盒子: 1200 * 601
- 版心盒子下外边距: 32px
- 分为头部和身体2部分
- 头部: 1200 * 45
  - flex布局装一个h3和一个a
  - 二者主轴方向justify-content: space-between;侧轴方向align-items: flex-start;
    - h3:
      - 21px
      - 不加粗
    - a:
      - 14px
      - #e5e5e5
      - 用i标签做图标(目前用&gt;代替即可)
- 身体: 1200 * 556
- 多行弹性条目主轴方向justify-content: space-between;侧轴方向align-content: flex-start;
  - 条目: 228 * 271
  - 条目内: img + h4 + p
  - 条目内水平居中: text-align: center;
    - img
      - 228 * 156(按照宽等比缩放即可)
      - 下外边距: 20px
    - h4
      - 字号: 14px
      - 下外边距: 39px
    - p
      - span + 内容即可