# 17-对象数组解构

```javascript
let pigs = [
    {name: '小猪佩奇', age: 5},
    {name: '小猪乔治', age: 3},
    {name: '小猪妈妈', age: 30},
    {name: '小猪爸爸', age: 35}
]

const [{name: name1, age: age1}, {name: name2, age: age2}, {name: name3, age: age3}, {name: name4, age: age4}] = pigs
console.log(name1, age1)
console.log(name2, age2)
console.log(name3, age3)
console.log(name4, age4)
```