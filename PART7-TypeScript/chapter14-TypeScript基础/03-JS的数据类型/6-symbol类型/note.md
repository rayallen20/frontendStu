# 6-symbol类型

- symbol类型的作用: 生成一个**独一无二**的值
  - 用于创建唯一的标识符
  - 可以作为对象属性的键,避免属性名冲突

```javascript
let a = Symbol("foo");
let b = Symbol("foo");
console.log(a === b); // false
```

```javascript
const secret = Symbol("secret");
const obj = {};
obj[secret] = 123;
obj["secret"] = 456;

console.log(obj[secret]);    // 123
console.log(obj["secret"]);  // 456
```

- TS中也同样支持symbol类型

- `symbol.ts`:

```typescript
const s1: symbol = Symbol("identify");
const s2 = Symbol("identify");

const person = {
    [s1]: "developer",
    [s2]: "designer",
}

console.log(person);
```

```
ts-node --compiler-options '{"module":"commonjs"}' symbol.ts
{ [Symbol(identify)]: 'developer', [Symbol(identify)]: 'designer' }
```

- 注: symbol类型作为键名时,不会出现在`for...in`/`Object.keys()`等常规枚举中,但可以通过`Object.getOwnPropertySymbols()`获取
