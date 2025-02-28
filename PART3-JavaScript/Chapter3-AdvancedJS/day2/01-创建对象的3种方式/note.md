# 01-创建对象的3种方式

## 1. 使用对象字面量创建对象

```javascript
let obj = {
    name: '张三',
    age: 18,
    say: function () {
        console.log('我是' + this.name + '，今年' + this.age + '岁了')
    }
}
```

## 2. 使用`new Object()`创建对象

- JS中的内置对象:
  - Array
  - Function
  - Date
  - Math
  - JSON
  - Object

```javascript
let obj = new Object({
    name: '张三',
    age: 18,
    say: function () {
        console.log('我是' + this.name + '，今年' + this.age + '岁了')
    }
})
```

## 3. 使用构造函数创建对象

- 构造函数: 用于创建对象的函数
- 构造函数的特点:
  - 函数名首字母大写
  - 使用`new`关键字调用
  - 函数内部使用`this`关键字指向新创建的对象
  - 函数不需要写`return`,其返回值即为新创建的对象
  - 若函数返回值的类型为基本数据类型,则返回值为新创建的对象
  - 实例的类型与构造函数的函数名相同

```javascript
function Person(name, age) {
    this.name = name
    this.age = age
    this.say = function () {
        console.log('我是' + this.name + '，今年' + this.age + '岁了')
    }
}

let tom = new Person('Tom', 18)
let jerry = new Person('Jerry', 20)

console.log(tom)
console.log(jerry)
```