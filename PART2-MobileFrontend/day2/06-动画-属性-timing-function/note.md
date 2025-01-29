# 06-动画-属性-timing-function

## 1. 属性与作用

- `animation-timing-function`：动画的速度曲线
    - 默认值: `ease`(慢速开始,慢速结束,即慢 -> 快 -> 慢)
    - `linear`: 匀速
    - `steps(N)`: 逐帧动画.N为动画帧数
    - `cubic-bezier(x1, y1, x2, y2)`: 自定义速度曲线
        - [贝塞尔曲线](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A)
        - 其中`(x1, y1)`和`(x2, y2)`是和贝塞尔曲线有关的2个控制点,这玩意儿我也不明白