let n1: null = null; // null类型只能赋值为null
let n2 = null; // 在TS中 如果不明确指定 则null会被类型推断为any类型

console.log(n1);
console.log(n2);

// any类型可以赋值为任何类型
n2 = 123; // 可以赋值为number类型
console.log(n2);

n2 = "hello"; // 可以赋值为string类型
console.log(n2);
