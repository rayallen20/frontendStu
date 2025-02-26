# 18-案例-登录页tab切换

## 1. 需求

- 点击`账户登录`或`二维码登录`切换对应的登录方式

## 2. 实现

- step1. 找到2个tab按钮
  - `.tab-nav a`
- step2. 找到2个tab内容
  - `.tab-pane`
- step3. 分别给2个tab按钮设置点击事件
  - 注意`.tab-nav a`的`border-bottom`属性也要设置