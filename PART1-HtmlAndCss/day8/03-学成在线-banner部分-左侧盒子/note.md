# 03-学成在线-banner部分-左侧盒子

## 1. 结构

ul > li > a

**给a设置宽高即可,因为子元素可以撑开父元素**

## 2. 样式

### 2.1 li高度问题(或者说a高度)

这里我的实现有问题的地方在于,第1个a和最后一个a是49px,中间的a都是46px

这里的实现是: 给left上内边距3px,a均为46px,这样最下面剩余的3px就不用管了

### 2.2 a的内边距问题

不要只给左内边距,因为还要考虑到右边的小箭头图片,所以左右都要给内边距

### 2.3 a的hover背景色问题

这个我在实现时没有注意到,应该是hover的时候透明度变大,而不是背景色变化

**这种地方不要写死颜色**

rgba中的a,数值越小表示透明度越高

## 3. 右侧小箭头

### 3.1 结构

在a里边放一个i标签,因为i虽然表示倾斜,但是又和icon很像

**这个地方不是用背景图片实现的**

### 3.2 样式

这个效果应该用字体图标实现,但目前还没学这个

把a改成flex布局(注意flex布局中是不区分行内/块级元素的,都可以随意设置宽高),然后设置文字和i主轴对齐即可