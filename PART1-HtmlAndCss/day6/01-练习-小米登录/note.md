# 01-练习-小米登录

## 1. 问题

1. 图片和文字我只给了margin-left(margin-right就是auto了)和margin-bottom,但我感觉可能不是这么设计的
2. h1里的图片我是靠padding来调整让图片居中的,不知道这么干对不对
3. input是行内块元素,不是行内元素

## 2. 测量

1. 外部盒子的宽高 339 * 356
2. h2的字号 28px
3. logo和h2都是居中对齐的,不是margin-left挤过去的
4. logo到h2 32px;h2到input 45px
5. input的宽高 339 * 50;边框颜色#ccc;左内边距12px;上下间距12px
6. button的宽高和input一样;字号14px;字体颜色#fff;

## 3. 他讲的内容

1. **h1标签经常用来做logo**
2. 素材里的小米logo图片是透明色的,不是只有那个mi字的
3. **logo一般都是背景**
4. 结论:**logo一般都是h1+背景图实现的**
5. **如果一个盒子上下都有距离,一般是给这1个盒子都设置好即可,不是给它上边的盒子设置下边距,然后再给它下面的盒子设置上边距的思路**
6. 盒子与盒子之间的距离用margin,内容与边框的距离用padding
7. 和第5点说的一样,第2个input上下都有间距,所以直接给第2个input设置上下margin就可以了