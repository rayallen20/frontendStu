# 20-综合案例2

## 1. 出现问题的思路

- step1. 头部用2个行内块布局,2个行内块的宽度加起来=父级元素的宽度
- 问题1: 2个行内块之间有缝隙(已经设置了`margin: 0; padding: 0`)
- 问题2: 有一个行内块元素被挤到下一行了(这个行内块有文字内容)

结论:通常也没有这么布局的,不使用行内块

## 2. 实现了的思路

- step1. 头部用一个有底色的div包裹一个没有底色的div
  - 说白了就是用没有底色的div盖住了有底色的div 
- 确实是实现了,但是可能思路还是有问题

## 3. 我实现的问题

1. 所有应该是a的地方都没用a
2. 没有底色的div在纵向上没有盖住有底色的div
3. li的最左侧应该是一个方块而不是圆点
4. li的行高没量(测量方式:从上一行顶部量到下一行顶部)
5. 小点和图片分别属于不同的元素,小点是li的,图片是a的,这就是没设置a的另一个问题了
6. 小点是背景图(水平靠左垂直居中)
7. 小方块也是背景图(注意图片和文字之间的padding)