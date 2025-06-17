# 4-array类型

- TS中,数组的定义有2种方式:
  - `const arr: number[] = [1, 2, 3]`
  - `const arr: Array<number> = [1, 2, 3]`
    - 不推荐这种方式,因为会与React/JSX的写法产生冲突

- `array1.ts`:

```typescript
const names :string[] = ["Alice", "Bob", "Charlie"];
// 注意: 此时数组是有类型的, 只能存储string类型的元素
// names.push(1) // error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);
```

```
ts-node --compiler-options '{"module":"commonjs"}' array1.ts
[ 'Alice', 'Bob', 'Charlie' ]
```

- `array2.ts`:

```typescript
// 注意: 这里由于同一个包内已经存在名为names的变量 因此需要使用其他变量名
// 不推荐这种方式,因为会与React/JSX的写法产生冲突
const names2: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(names2);
```

```
ts-node --compiler-options '{"module":"commonjs"}' array2.ts
[ 'Alice', 'Bob', 'Charlie' ]
```