# 22-极速问诊

## 1. 我的思路

### 1.1 header

- 顶部的部分留空,我怀疑设计稿里那部分是表示移动端的
- flex布局
- 字体图标 + h1 + a
  - 字体的颜色设置为变量
- 有下外边距(和图片的距离)

问题: 我的h1没有居中,不知道为什么

### 1.2 banner

- img + h3
  - h3里边有个span
- 图片: 240 * 206
- img和h3的左右边距靠auto控制(在移动端可以吗?)

### 1.3 content

- ul
- li使用flex布局
- img + div + a
- div给`flex: 1`,让div占满剩余空间

## 2. 讲解

### 2.1 header

- 设计稿里电池那块不用考虑
- header有专门的header标签,而不是`<div class="header">`
- i + h2 + a

### 2.2 banner

- img + p
- **这里图片和文字的居中,是通过父元素的`text-align: center`实现的**

### 2.3 content

- 注意图片要用div包起来,以便控制大小
- li的边框是有4px圆角的
- **规定: 线条最小是1px 所以这里边框的单位没有转换为rem**