# 1-线段样式设置

- `lineWidth`: 线段宽度
- `lineCap`: 线段两端样式
    - `butt`: 默认值,线段两端平直
    - `round`: 线段两端圆形
    - `square`: 线段两端方形
- `lineJoin`: 线段连接处样式
    - `bevel`: 在连接处用三角形填充
    - `round`: 在连接处用圆形填充
    - `miter`: 延伸相连部分的外边缘,使其相交于一个点
- `miterLimit`: 斜接限制,当`lineJoin`为`miter`时,设置斜接的最大长度,超过这个长度就会变成`bevel`