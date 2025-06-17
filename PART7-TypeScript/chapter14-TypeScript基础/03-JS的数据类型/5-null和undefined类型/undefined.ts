let n3: undefined = undefined; // undefined类型的变量只能赋值为undefined
let n4 = undefined; // 在TS中 如果不明确指定 则undefined会被类型推断为any类型

console.log(n3);
console.log(n4);

// any类型可以赋值为任何类型
n4 = 123; // 可以赋值为number类型
console.log(n4);

n4 = "hello"; // 可以赋值为string类型
console.log(n4);