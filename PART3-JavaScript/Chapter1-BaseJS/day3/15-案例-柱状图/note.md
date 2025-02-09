# 15-案例-柱状图

## 1. 思路

### 1.1 样式

- div > h3 + div(放柱状图的div)
  - 放柱状图的div:
    - `display: flex; justify-content: space-around;`
    - 只要左侧和下侧边框
  - 柱状图:
    - h5(显示柱状图上方的数字) + div(显示柱状图) + div(显示柱状图下方的文字)
    - 下侧的小`|`和文字用定位定下去
    - `background: linear-gradient(#3c99ff, #4489d0, #2283e4);`