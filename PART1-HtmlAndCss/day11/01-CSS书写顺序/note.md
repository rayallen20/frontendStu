# 01-CSS书写顺序

## 1. CSS书写顺序

不同的CSS书写顺序会影响浏览器的渲染性能,推荐如下书写顺序

| 顺序 | 类别          | 属性                                                                        |
|----|-------------|---------------------------------------------------------------------------|
| 1  | **布局属性**    | `display`、`position`、`float`、`visibility`、`overflow`                      |
| 2  | **盒子模型+背景** | `width`、`height`、 `margin`、`padding`、 `border`、 `background`              |
| 3  | **文本内容属性**  | `font`、`color`、`text-decoration`、`text-align`、`text-indent`、`line-height` |
| 4  | **点缀属性**    | `cursor`、 `border-radius`、 `text-shadow`、 `box-shadow`                    |

## 2. 类选择器数量问题

开发中推荐多用**类选择器 + 后代选择器**的模式,一个选择其中的类选择器数量,**最好不要超过3个**