# 07-小兔鲜-banner-轮播图部分

1. 轮播图的结构是 ul > li > a > img,我少了一层a
2. 调整li宽度的方式:
    - 之前学过的,ul宽度设置为父级的X倍
    - 给li中的img宽度写死,本例中就是1240
3. 分页器列表是用ol做的
    - 这里用bottom和right边偏移,不是top和left
4. li的选中状态,他也是用边框实现的(4px的边框)
    - 思路1: 用边框实现(非内减模式)
      - 每个li的大小都是14 * 14
      - 边框是4px
      - 内容颜色是透明度0.8,边框是透明度0.5
      - 默认的边距外扩的方式: `box-sizing: content-box`(非内减模式)
    - 思路2: 使用`::after`伪元素,在li里再放一个盒子
      - 伪元素盒子是里边的小圆点 (14 * 14)
      - 用li做边框
      - 这种情况下,li的宽高就是22 * 22
      - 需要给内边距,才能让伪元素水平垂直在li内居中显示
      - 注意:伪元素必须有content属性
      - border-radius属性值可以写百分比
5. 被选中的li通常命名的类名为`active`
6. 还有一个鼠标变成小手的样式
   - 这个属性不用加在hover伪类上,直接写在样式上就行

## 伪元素复习

1. before是在内容前插入元素,after是在内容后插入元素
2. 伪元素是行内元素,要先转换成块级元素才能给宽高