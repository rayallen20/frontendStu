# 13-案例-全民出游

## 1. 自己的思路

### 1.1 大致结构

- 背景图
- 所有的动效图片,都用绝对定位定到指定位置上

### 1.2 云

- `transform: translateX(200px);`
- 动画: `animation: cloud 10s ease infinite alternate;`

### 1.3 热气球

- `transform: translateY(-100px);`
- 动画: `animation: balloon 10s ease infinite alternate;`

### 1.4 长颈鹿

- 在元素上设置: `transform-origin: left bottom;`
- `transform: rotate(30deg);`
- 动画: `animation: giraffe 10s ease infinite alternate;`

### 1.5 slogan

- `transform: scale(0.5);`
- 动画: `animation: slogan 10s ease;`
- 这里因为定位用了`transform: translate(-50%, -50%);`,所以动画再用`transform: translateZ();`会比较麻烦,所以用了`scale`来缩放

### 1.6 tag

- `transform: translateY(-100px);`
- 动画: `animation: tag 10s ease infinite alternate;`

## 2. 讲解

### 2.1 布局

1. **`html`,`body`都要给100%的高度,这样`container`的100%高度才能生效**
    - 这个是我实现时不知道的
2. 布局上,4个tag是放在1个div里的
    - 使用flex布局让4个img水平拉开距离
3. 热气球是有宽度的,不是原图的大小
4. **在都没有设置层级的前提下,后面的元素层级比前面的元素层级高**

### 2.2 云

- 这里我的动画思路是对的
- 但是,他是分别给每个云,设置了一个延迟时间,让他们不是同时动的

### 2.3 slogan

- 这里我的动画思路是对的
  - 先放大再缩小最终回到原来的大小

### 2.4 热气球

- 这里我的动画思路是对的

### 2.5 tag

- 这里就不是再写一个动画了,而是复用热气球的动画

### 2.6 长颈鹿

- 这里我的动画思路是对的
- 但是,他是先顺时针转45度,再逆时针转45度,最终回到原来的位置