# 16-案例-轮播图点击切换

## 1. 需求

- 点击小圆点,可以切换轮播图

## 2. 实现

- step1. 获取所有的小圆点
- step2. 给每一个小圆点绑定点击事件
  - 2.1 清除所有小圆点的`active`类
  - 2.2 给当前点击的小圆点添加`active`类
  - 2.3 获取当前点击的小圆点的索引
  - 2.4 使用该索引调用`modifyElement`函数
  - 2.5 维护`currentIndex`和`nextIndex`

- 注:`Array.form(Nodelist).indexOf()`可以获取元素在数组中的索引