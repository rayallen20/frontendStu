# 01-浅拷贝

- 浅拷贝: 把对象拷贝给一个新的对象,开发中我们经常需要复制一个对象
- 如果直接赋值,则复制的是地址,修改任何一个对象,另一个对象都会变化

## 1. 对象的浅拷贝

- `Object.assign(target, ...sources)`: 将源对象的所有可枚举属性复制到目标对象
- 展开运算符`...`: 将原对象展开成一个新的对象,它会将原对象的所有可枚举属性复制到新的对象中

## 2. 数组的浅拷贝

- `Array.prototype.concat()`: 连接两个或多个数组,并返回一个新的数组
  - 不传任何参数,则其功能就是将原数组拷贝到一个新数组中
- 展开运算符`...`: 将原数组展开成一个新的数组,它会将原数组的所有元素复制到新的数组中