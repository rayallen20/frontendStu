# 4-never类型

## 4.1 never类型

- never类型:
  - 表示永远不会有返回值的类型,例如:
    - 如果一个函数确定陷入死循环(即不会执行到该函数的结尾),则该函数的返回值类型应该为never
    - 如果一个函数确定抛出异常(即不会正常结束),则该函数的返回值类型应该为never

```typescript
function loopFoo() :never {
    while (true) {
        console.log('永远不会结束死循环的函数');
    }
}

function loopBar() :never {
    throw new Error('必然抛出异常的函数');
}
```

## 4.2 与void类型的区别

### a. void类型

- void作为函数返回值类型时:
  - 表示该函数没有返回值,或返回undefined
  - 调用函数后,该函数可以顺利执行完毕,只是没有返回值或显式返回undefined

```typescript
function voidDemo(): void {
    console.log("一个可以正常执行完毕但没有返回值或返回undefined的函数");
    return undefined;
}

const result = voidDemo();  // result的类型被推断为void 但实际上它的值是undefined
console.log(result);
```

```
ts-node --compiler-options '{"module":"commonjs"}' void_demo.ts
一个可以正常执行完毕但没有返回值或返回undefined的函数
undefined
```

### b. never类型

- 表示函数永远不会有返回结果
- 表示函数不会**正常**返回到调用者,因此函数签名中返回值类型标注为never的函数,不能有return语句

```typescript
function neverDemo1():never {
    throw new Error('抛出异常的函数');
}

function neverDemo2():never {
    while (true) {
        console.log('永远不会结束死循环的函数');
    }
}
```

### c. 区别总结

|      | `void`                   | `never`           |
|------|--------------------------|-------------------|
| 场景   | 没有返回值/可以返回undefined      | 永远不会返回(抛错或死循环)    |
| 语法限制 | 可以写return,也可以不写          | 不能写return,不能返回任何值 |
| 类型含义 | 可以有副作用(如console.log/赋值等) | 执行不到结尾,完全不会正常结束   |
| 调用结果 | 实际返回undefined(TS类型是void) | 调用永远不会"返回结果"      |

### d. 实际应用

- 大部分正常函数用void即可
- 保证一定抛异常或保证不会结束的函数才会用never
- 用never可以发现代码逻辑漏洞(比如穷举检查(exhaustive check)场景)

```typescript
// 联合类型 表示该类型的值可以是几种类型中的一种
type Shape = {kind: 'circle', radius: number} | {kind: 'square', len: number} | {kind: 'triangle', base: number, height: number}

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.len ** 2
        default:
            // 如果没有处理所有可能的情况 则TypeScript会报错
            // Tips: 在 TS或JS中 变量名以 `_` 开头通常表示该变量是"未使用的"或"仅用于占位"
            // Tips: 开发者有意不打算在后续代码中使用它
            // 这是一种常见的命名约定 没有特殊语法意义 仅用于增强代码可读性
            const _exhaustiveCheck: never = shape
            return _exhaustiveCheck // 这里的 never 类型表示这个分支永远不会被执行
    }
}

getArea({kind: 'triangle', base: 3, height: 4})
```

```
ts-node --compiler-options '{"module":"commonjs"}' exhaustive_check.ts
...
TSError: ⨯ Unable to compile TypeScript:
exhaustive_check.ts:15:13 - error TS2322: Type '{ kind: "triangle"; base: number; height: number; }' is not assignable to type 'never'.

15       const _exhaustiveCheck: never = shape
               ~~~~~~~~~~~~~~~~
...
```
