# 01-小兔鲜-热门品牌部分

## 1. 结构分析

- 通栏
- 版心
- 版心里是header和body

这个大结构是不变的

### 1.1 header要覆盖的样式

1. 现在header里只有左边的div了,右边的两个箭头,我认为是body的顶部,因为似乎这两个箭头是在文字的下方的

    - 所以header里的`justify-content: space-between;`是要覆盖的,覆盖为`justify-content: flex-start;`
    - 问题: 这里我没调主轴对齐方式,扔维持`justify-content: space-between;`,但是只有1个弹性条目时,这1个弹性条目和`justify-content: flex-start;`是一样的效果,因为没有第2个弹性条目可以和它对齐
    - 我做到body时,发现这两个小箭头实际上是在header的下内边距的位置上的,所以这里我是给小箭头的div设置了绝对定位来设置它的位置的

2. body里的样式变化

    - li的宽高 244 * 306px
    - img-box的宽高也是 244 * 306px
    - 结构是不变的(li > a > div),只是这次除了div没有文本内容了