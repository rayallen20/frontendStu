# 09-instanceof运算符

- `instanceof`: 用于判断一个变量是否是某个对象的实例,其检测方式是检测对象的构造函数的原型对象是否存在于该变量的原型链上

```javascript
function Person(name, age) {
    this.name = name
    this.age = age
}

let p = new Person('Tom', 18)
console.log(p instanceof Person) // true

let arr = [1, 2, 3]
console.log(arr instanceof Array) // true
// JS中数组也是对象,所以也是true
console.log(arr instanceof Object) // true

// 这是因为Array.prototype是Object.prototype的子集
console.log(Array instanceof Object) // true

console.log('====================')
// 通过原型链的方式来判断: Array的原型对象的__proto__属性指向Object的原型对象
console.log(Array.prototype.__proto__ === Object.prototype)
```