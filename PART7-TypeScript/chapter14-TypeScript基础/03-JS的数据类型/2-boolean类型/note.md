# 2-boolean类型

- `boolean.ts`:

```typescript
let flag: boolean = true;
flag = 20 > 30;
console.log(flag);
```

```
ts-node --compiler-options '{"module":"commonjs"}' boolean.ts
false
```