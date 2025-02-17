# 14-案例-吸附顶部导航

## 1. 需求

- 当页面滚动到头部模块,导航栏自动滑入,否则滑出

## 2. 实现

- step1. 监听`window`的`scroll`事件
- step2. 获取`.xtx_header`到顶部的距离
- step3. 当滚动距离大于等于`.xtx_header`到顶部的距离时:
  - 3.1 修改`.app-header-sticky`的`opcacity`为1
  - 3.2 修改`.app-header-sticky`的`transform`为`translateY(0)`

## 3. 讲解

- 给的素材里提前准备了一个`.show`类,是用于让导航栏吸附的类