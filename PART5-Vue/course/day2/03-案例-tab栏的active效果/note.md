# 03-案例-tab栏的active效果

## 1. 需求

- 点击`a`时,添加`.active`类,同时移除其他`a`的`.active`类

## 2. 实现

- 设置一个用于记录被点击的`a`的索引值
- `:class`中判断当前索引是否为被点击的索引即可