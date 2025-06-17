# 5-null和undefined类型

- 这两个类型,既是实际的值,也是类型
- 但是在TS中,如果不明确指定的话,这两个类型都会被推断为`any`类型

- `null.ts`:

```typescript
let n1: null = null; // null类型只能赋值为null
let n2 = null; // 在TS中 如果不明确指定 则会被类型推断为any类型

console.log(n1);
console.log(n2);

// any类型可以赋值为任何类型
n2 = 123; // 可以赋值为number类型
console.log(n2);

n2 = "hello"; // 可以赋值为string类型
console.log(n2);
```

```
ts-node --compiler-options '{"module":"commonjs"}' null.ts
null
null
123
hello
```

- `undefined.ts`:

```typescript
let n3: undefined = undefined; // undefined类型的变量只能赋值为undefined
let n4 = undefined; // 在TS中 如果不明确指定 则undefined会被类型推断为any类型

console.log(n3);
console.log(n4);

// any类型可以赋值为任何类型
n4 = 123; // 可以赋值为number类型
console.log(n4);

n4 = "hello"; // 可以赋值为string类型
console.log(n4);
```

```
ts-node --compiler-options '{"module":"commonjs"}' undefined.ts
undefined
undefined
123
hello
```
