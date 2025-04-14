# 7-computed计算属性

- 在Composition API中,`setup()`函数中使用`computed()`函数来定义计算属性
- `computed()`函数有2种使用方式:
  - 基本使用: `computed()`函数接收一个`getter()`函数,并根据`getter()`函数的返回值,返回一个不可变的响应式ref对象
  - `computed()`函数的`get()`和`set()`方法: `computed()`函数接收一个具有`get()`和`set()`方法的对象,并返回一个可变(可读写)的ref对象