# 1-number类型

- TS中的`number`类型表示所有数字,包括整型和浮点型

- `number.ts`:

```typescript
let num1: number = 100;
let num2: number = 1.23;

console.log(num1);
console.log(num2);
```

```
ts-node --compiler-options '{"module":"commonjs"}' number.ts
100
1.23
```