# 10-自定义属性

- `data-`开头的属性,是自定义属性,可以通过`对象.dataset`属性获取
  - 例: `<div data-name="zhangsan"></div>` => `div.dataset.name` => `zhangsan`
- 自定义属性命名规范:
  - 不能包含大写字母
  - 多个单词之间用`-`连接
  - 取值时,将`-`后的字母转换为大写字母
  - 例: `<div data-user-name="zhangsan"></div>` => `div.dataset.userName` => `zhangsan`
- `对象.dataset`属性实际上是一个对象(也可以理解为是一个Map),以键值对的形式存储自定义属性,但也可以通过属性名的方式访问