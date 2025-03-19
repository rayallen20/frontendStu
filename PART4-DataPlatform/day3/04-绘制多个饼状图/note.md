# 04-绘制多个饼状图

- `series.center`: 设置饼状图的圆心位置.该属性可以设置饼图在容器中的位置
- `series/left/right/top/bottom`: 也可以用于设置饼状图的位置
- `options.title`: 可以是`Object`,也可以是`Array<Object>`,用于设置多个标题
- 设置外延线: 以下选项是且关系,换言之,必须按照如下设置才能显示外延线
  - `series.label`:
    - `show`: `true`
    - `position`: `outside`
  - `series.labelLine`:
    - `show`: `true`