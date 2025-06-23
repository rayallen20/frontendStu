let message: any = "hello"
console.log(message)

// 访问any类型的不存在的属性
console.log(message.foo)  // undefined

// any类型可以赋值为任意类型
message = 123
console.log(message)