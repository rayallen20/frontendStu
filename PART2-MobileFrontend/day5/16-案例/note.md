# 16-案例

## 1. 实现思路

### 1.1 导航栏

- 固定定位
- 去掉`flex-grow`(`flex-grow: 0`)
- 左侧的内容换成logo图
  - 注意大小和`vertical-align: middle`

实现时出现的问题:

- 不能用 `.container > .navbar`的思路,因为`.navbar`用了固定定位,不受`.container`的宽度影响了
- 所以要把`.container`加到`.navbar`上,然后调固定定位的水平位置
  - `left: 50%; transform: translateX(-50%);`

### 1.2 轮播图

- 直接照抄加一张图加一个指示器即可

### 1.3 标题栏

- h3 + p
- 水平居中: `text-align: center`

### 1.4 图片内容

- `视口宽度 > 992px`: 1行4个
- `768px < 视口宽度 < 992px`: 2行2个
- `视口宽度 < 768px`: 1行1个
- 间距的实现: 
  - 不要把12个单位占满
  - 给`row`设置`justify-content: space-between`
- 高度: 直接给`row`中的div加高度即可

问题: 我确实是有间距了,但是似乎间距太大了.我怀疑间距的来源可能不是靠我这种方式来的

## 2. 讲解

- `<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">`: 设置网页图标
- 注意自己写的CSS一定要放在Bootstrap等框架的后边,也就是最后,因为要层叠掉框架的样式

### 2.1 导航栏

- `.navbar`里边有个`.container-fluid`,把它改成`.container`即可,不需要给`.navbar`加`.container`
- 框架提供了`fixed-top`类,用于固定定位

### 2.2 轮播图

- 不用图片,而使用背景图,这样后边做响应式布局时,图片才能跟着变大变小
- 高度:
  - `视口宽度 < 768px`,高度250px;
  - `768px < 视口跨度 < 992px`,高度400px;
  - `视口跨度 > 992px`,高度500px;

### 2.3 标题栏和图片内容

- 这里他用1个div实现的

#### 2.3.1 标题栏

#### 2.3.2 图片内容

- 高度是固定的,就是200px
- 上下距离是靠外边距拉开的
- 左右边距是靠每个盒子的左右内边距拉开的
  - 这里是`div > a`的结构
  - 外边的`div`使用Bootstrap的栅格系统分列
    - 栅格系统的每个栅格里边自己有内边距
  - 真正显示的是里边的a