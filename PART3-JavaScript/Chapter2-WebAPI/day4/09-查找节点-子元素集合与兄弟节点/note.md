# 09-查找节点-子元素集合与兄弟节点

## 1. 子元素集合

- `DOM.children`: 获取当前元素的所有子元素
  - 类型: `HTMLCollection`,类数组对象,可通过下标访问

## 2. 兄弟节点

- `DOM.nextElementSibling`: 获取当前元素的下一个兄弟节点
- `DOM.previousElementSibling`: 获取当前元素的上一个兄弟节点

- 和`DOM.nextSibling`/`DOM.previousSibling`的区别
  - `DOM.nextSibling`/`DOM.previousSibling`获取的是下/上一个节点,不一定是元素节点
    - 这2个属性的类型为`ChildNode`,可能是元素/文本/注释节点
  - `DOM.nextElementSibling`、`DOM.previousElementSibling`获取的是下/上一个元素节点
    - 这2个属性的类型为`Element`或`null`