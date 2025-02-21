# 14-AlloyFinger插件

- 轻量级web手势插件,可以为元素注册多种手势事件
- [仓库地址](https://github.com/AlloyTeam/AlloyFinger)
- 使用: `<script src="alloy_finger.js"></script>`
- `swipe`: 滑动事件
- `event.direction`: 滑动方向
  - `Right`: 向右滑动
  - `Left`: 向左滑动
  - `Up`: 向上滑动
  - `Down`: 向下滑动
- 注意: 每个`AlloyFinger`实例只能监听1个元素的手势事件