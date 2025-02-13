# 01-对象介绍

- JS中的Object类似其他语言中的map,是一种键值对的集合

## 1. 对象的组成

- 属性
    - 尽量避免给属性命名为`name`,因为`name`是全局对象的属性
    - 例如:
    
```javascript
function Person(name, age) {}
console.log(Person.name); // Person

class MyClass {}
console.log(MyClass.name); // MyClass
```

- 方法