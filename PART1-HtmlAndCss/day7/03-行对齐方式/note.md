# 03-行对齐方式

## 1. 属性值与属性名

- 属性名：`align-content`
- 属性值

|       属性值       |                  效果                   |
|:---------------:|:-------------------------------------:|
|  `flex-start`   |           弹性条目从**起点**开始依次排列           |
|   `flex-end`    |           弹性条目从**终点**开始依次排列           |
|    `center`     |            弹性条目沿侧轴**居中**排列            |
| `space-between` |    弹性条目沿侧轴均匀排列,空白间距均匀分布在弹性条目**之间**    |
| `space-around`  | 弹性条目沿侧轴均匀排列,空白间距均匀分布在弹性条目**两侧(上下两侧)** |
| `space-evenly`  |       弹性条目沿侧轴均匀排列,弹性盒子与容器之间间距相等       |

## 2. 注意

- 该属性对**单行**弹性盒子模型无效
- 单行盒子模型使用`align-items`控制侧轴对齐方式
- flex布局中,子元素在垂直方向上,默认拉伸(stretch)填充父元素
- 前提:**弹性容器要有高**