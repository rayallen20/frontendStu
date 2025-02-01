# 05-项目实现

## 1. header

- 左右内边距4vw
- 图片盒子 + 圆角a

## 2. search

- 不显示边框的input
- placeholder居中显示(`text-align: center`)
- 绝对定位把放大镜放在中间
- input:focus时,不显示放大镜
- 上下左右10px的内边距

TODO: 

- 放大镜的显隐没有实现
- 由于input是单标签,无法实现input:focus时,通过选择器选中放大镜

## 3. banner

- 这里由于最外层盒子有内边距,所以给ul外边又套了一个盒子
- ul是这个盒子的N倍宽度
  - 后边的基本就和轮播图一样了
- 圆角要设置给img,因为这里图片不是li的背景图,所以直接给li圆角不会实现"切割"的效果

新知识:

- img标签的`object-fit: cover;`属性: 保持图片的宽高比,并且填充满整个盒子

## 4. title

- flex布局
- h3 + a
- a里边有个字体图标
- 看成品得到的信息:
  - 行高25px
  - 下外边距16px

## 5. ranking-list

- 15px的左右内边距
- 里边是li的布局

## 6. recommend-list

- 15px的左右内边距
- ul要给`flex-wrap: wrap;`
- li里边是上img下p的布局
  - 注意img外加div
  - 注意img的宽高比(`object-fit: cover;`)
  - 注意img盒子有下外边距
- 装img的div有一个绝对定位的子元素
  - 只有右上和左下有圆角

## 7. install

- 固定定位
- 内部flex布局
  - img + p + a
  - 圣杯布局,多余的空白给中间的p(`flex: 1;`)