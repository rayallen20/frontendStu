# 15-案例-tab栏切换

## 1. 需求

- 鼠标经过不同的选项卡,底部可以显示不同的内容

## 2. 实现思路

- step1. 获取`.tab-nav`中的所有`a`标签
  - 1.1 为所有a添加鼠标经过事件
  - 1.2 鼠标经过事件中:
    - ① 移除所有a的`active`类
    - ② 当前a添加`active`类
    - ③ 获取当前a的索引
    - ④ 获取`.tab-content`中所有的`div`
    - ⑤ 隐藏所有的`div`
    - ⑥ 显示当前索引对应的`div`