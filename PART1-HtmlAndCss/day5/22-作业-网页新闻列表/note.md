# 22-作业-网页新闻列表

## 1. 问题

1. 给head和body分别设置宽度和margin,要写2次;不如给nav设置padding,因为这样只用设置1次
2. h标签其实和ul一样,不需要再在外边套一层div了,因为h标签本身就是块元素
3. li里还有a标签(这是常规做法 因为你这个导航栏肯定是能点的)
4. 内/外边距在某一个方向上不要,就是0
5. 通常很少设置padding-bottom
6. 内容和border-bottom有距离时,直接给盒子设置高度即可,不用给padding-bottom
    - 内容默认显示在一个盒子的左上角,如果设置盒子高度为`字体大小 + 字体到底边框的距离(其实就是padding-bottom)`,那么就不用设置padding-bottom了
    - 这个方法被称为高度剩余法,即高度比内容多出的部分就是padding-bottom,此时直接设置高度即可(或者可以说是把`高度-字体大小`的剩余部分作为padding-bottom)

## 2. 测量相关
1. padding-top: 39px ; padding-left/right: 29px(注意测量时不要把边框也给算进去) li的行高:50px
2. **测量内边距时,注意是从外盒子的border内侧开始量,别把border算进去**
