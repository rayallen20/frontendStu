# 02-获取元素

## 1. 根据CSS选择器获取元素

- `document.querySelector('CSS选择器')`:获取第一个匹配的元素
  - CSS选择器可以是多个选择器的组合
  - 没有匹配到则返回`null`
- `document.querySelectorAll('CSS选择器')`:获取所有匹配的元素
  - 返回值: `NodeList`对象(伪数组)
  - 伪数组: 有长度有索引,但是没有`pop()`/`push()`等方法
  - 想要使用数组的方法,可以使用`Array.from()`方法将其转换为数组
  - 想要得到NodeList对象中的每一个元素,需要遍历获得
- [文档地址](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)

- 注: JS中的Object和Array最好都使用`const`声明
  - 这是为了确保引用不变,即不能再指向其他对象或数组;而非为了确保其内容不变
- 注: `console.dir()`方法可以查看对象的所有属性和方法,通常用于打印对象

## 2. 其他获取DOM元素的方法

- `document.getElementById()`:根据id获取元素
- `document.getElementsByClassName()`:根据类名获取元素
  - 返回值类型为`HTMLCollection`对象(伪数组)
- `document.getElementsByTagName()`:根据标签名获取元素
  - 返回值类型为`HTMLCollection`对象(伪数组)
- `document.getElementsByName()`:根据name属性获取元素
  - 返回值类型为`HTMLCollection`对象(伪数组)
  - 注意: 仅有表单元素和一些特定元素才有name属性