# 1-any类型

- any类型:
  - 可以对any类型的变量进行任意操作,包括获取不存在的属性/调用不存在的方法等
  - 可以为一个any类型的变量赋任意类型的值

```typescript
let message: any = "hello"
console.log(message)

// 访问any类型的不存在的属性
console.log(message.foo)  // undefined

// any类型可以赋值为任意类型
message = 123
console.log(message)
```

```
ts-node --compiler-options '{"module":"commonjs"}' any.ts
hello
undefined
123
```

- Tips: 在某些情况下,若需要处理的类型注解过于繁琐,或者在引入第三方库时缺少类型注解,可以使用any类型进行类型适配