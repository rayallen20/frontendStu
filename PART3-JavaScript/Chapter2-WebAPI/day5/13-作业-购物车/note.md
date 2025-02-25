# 13-作业-购物车

## 1. 需求

- 读取LocalStorage中的购物车数据并渲染到页面
- 点击商品的加减按钮,修改LocalStorage中的数据并重新渲染页面
- 勾选商品的复选框,修改LocalStorage中的数据并重新渲染页面
- 删除商品,修改LocalStorage中的数据并重新渲染页面
- 以上所有功能都需要和总价和商品种类数量保持同步

## 2. 实现

### 2.1 勾选商品的复选框

- 给`.tbody`注册点击事件(事件委托)
  - 后续的`+`和`-`按钮也是把事件注册到`.tbody`上
- 判断点击的元素是否是`.tbody`下的`input[type=checkbox]`
- 检测当前点击的`input[type=checkbox]`是第几个
- 修改LocalStorage中的数据
- 存储数据
- 重新渲染页面

### 2.2 点击商品的加减按钮

- 给`.tbody`注册点击事件(事件委托)
- 判断点击的元素是否是`.tbody`下的`button` 且 元素的类名包含`decrease`
  - `increase`同理
- 检测当前点击的`button`是第几个
  - 父级的父级的父级
- 修改LocalStorage中的数据
- 存储数据
- 重新渲染页面

### 2.3 删除商品

- 给`.tbody`注册点击事件(事件委托)
- 判断点击的元素是否是`.tbody`下的`button` 且 元素的类名包含`del`
- 检测当前点击的`button`是第几个
  - 父级的父级
- 修改LocalStorage中的数据
- 存储数据
- 重新渲染页面