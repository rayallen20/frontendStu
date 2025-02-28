# 09-Array构造器的常用静态方法

- `Array.from()`: 将类数组对象或可迭代对象转换为数组
- 类数组对象:
  - 有length属性
  - 有索引属性
  - 没有数组的方法
  - 例如:
    - arguments
    - `DOM.querySelectorAll()`
    - `DOM.children`