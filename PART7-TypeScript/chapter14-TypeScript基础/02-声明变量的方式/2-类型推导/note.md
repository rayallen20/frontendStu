# 2-类型推导

- `type-inference.ts`:

```typescript
let message = "Hello";
console.log(typeof message); // string
```

```
ts-node --compiler-options '{"module":"commonjs"}' type-inference.ts
string
```