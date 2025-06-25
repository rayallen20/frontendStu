# b-非空类型断言

- 例:

```typescript
function printMessageLength(message?: string): void {
    console.log(message.length) // 编译报错:  'message' is possibly 'undefined'.
}
```

- 当然,可以使用if进行判断:

```typescript
function printMessageLength(message?: string): void {
    if (message !== undefined) {
        console.log(message.length)
    }
}
```

- 也可以使用非空类型断言:
  - `!`: 非空类型断言操作符,表示确定某个变量的值不为`null`或`undefined`
  - 这种"确定",**只能跳过TS在编译阶段的检查,并不能真的在运行时确保变量不为`null`或`undefined`**

```typescript
function printMessageLength(message?: string): void {
    // 使用非空断言操作符 跳过TS在编译阶段的undefined检查
    console.log(message!.length)
}
```

- 首先,编译是可以通过的:

```
ts-node --compiler-options '{"module":"commonjs"}' demo.ts
```

- 但是,如果在运行时没有传入`message`,还是会报错:

```typescript
function printMessageLength(message?: string): void {
    // 使用非空断言操作符 跳过TS在编译阶段的undefined检查
    console.log(message!.length)
}

printMessageLength()
```

```
ts-node --compiler-options '{"module":"commonjs"}' demo.ts
/frontendStu/PART7-TypeScript/chapter14-TypeScript基础/05-TS类型的补充/5-类型断言/b-非空类型断言/demo.ts:3
    console.log(message!.length)
                         ^
TypeError: Cannot read properties of undefined (reading 'length')
```