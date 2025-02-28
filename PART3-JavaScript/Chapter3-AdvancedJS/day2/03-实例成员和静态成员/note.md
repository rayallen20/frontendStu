# 03-实例成员和静态成员

## 1. 实例成员

- 实例成员就是通过实例对象访问的成员,即实例的成员属性和成员方法

```javascript
function Person(name, age) {
    // 实例的成员属性
    this.name = name
    this.age = age
    
    // 实例的成员方法
    this.say = function () {
        console.log('我是' + this.name + '，今年' + this.age + '岁了');
    }
}

let p1 = new Person('孙悟空', 18)
let p2 = new Person('猪八戒', 28)

console.log(p1.name, p1.age)
console.log(p2.name, p2.age)
```

## 2. 03-实例成员和静态成员-静态成员

- 通过构造函数直接访问的成员,即构造函数的成员属性和成员方法
  - 可以认为静态成员是所有实例对象共享的成员,但是这些成员只能通过构造函数来访问,不能通过实例对象来访问
  - 静态方法中的`this`指向的是构造函数本身
  - `Date.now()`/`Math.random()`/`Math.PI`等都是静态属性和静态方法,因为这些属性和方法都是通过构造函数直接访问的

```javascript
function Person(username, age) {
    this.username = username
    this.age = age
    this.say = function () {
        console.log('我是' + this.username + '，今年' + this.age + '岁')
    }
}

// 静态的成员属性
Person.counter = 0

// 静态的成员方法
Person.count = function () {
    // 静态方法中的this指向的是构造函数本身
    this.counter++
    // name是构造函数的一个内置属性,表示构造函数的名称
    console.log('当前共有' + this.counter + '个' + this.name + '对象')
}

let p1 = new Person('张三', 18)
Person.count()

let p2 = new Person('李四', 20)
Person.count()
```