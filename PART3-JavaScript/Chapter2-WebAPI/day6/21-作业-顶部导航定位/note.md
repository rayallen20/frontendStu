# 21-作业-顶部导航定位

## 1. 需求

- 顶部导航开始不显示
- 当页面滑到主导航栏时,**新顶部导航栏滑动下拉显示**,并且改为固定定位
- 等页面滑到上面,新顶部导航栏隐藏

## 2. 实现

- 注意主导航的选择器: `.xtx-wrapper .container`
  - 不能直接选`.container`,因为第1个`.container`是`.sticky`
- `页面滚动距离 > .container.offsetTop`时,为`.sticky`添加`show`类
- `页面滚动距离 <= .container.offsetTop`时,为`.sticky`移除`show`类