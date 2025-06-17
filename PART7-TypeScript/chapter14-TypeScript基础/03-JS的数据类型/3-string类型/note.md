# 3-string类型

- 和JS一样,TS中的string也是`'`和`"`皆可,但推荐使用`"`

- `string.ts`:

```typescript
const message: string = "success";
console.log(message);
```

```
ts-node --compiler-options '{"module":"commonjs"}' string.ts
success
```