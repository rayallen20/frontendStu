# 3-联合类型

- 联合类型(Union Types):
  - TS的类型系统允许开发者使用多种运算符,从现有类型中,构建新类型
  - 联合类型是一种组合类型的方法
  - 联合类型由2个或多个其他类型组成,表示该类型变量的值可以是这些类型中的任意一个
  - 联合类型中的每个类型被称为联合成员(Union Member)

```typescript
function printID(id: number | string | boolean): void {
    console.log(id);
}

printID(123);
printID("abc");
printID(true);
```

```
ts-node --compiler-options '{"module":"commonjs"}' union_types.ts
123
abc
true
```

- 当需要调用联合类型中的某个联合成员的方法时,需要先使用类型保护(Type Guards)来确保变量的类型

- 以上代码,如果按照如下写法,则会报错:

```typescript
function printID(id: number | string | boolean): void {
    console.log(id.toUpperCase());  //  Property 'toUpperCase' does not exist on type 'string | number | boolean'.
}
```

- 这种场景下,就需要类型保护了:
  - 所谓类型保护,简单理解就是在使用联合类型的变量之前,先检查它的具体类型
  - 相当于告诉TS编译器:在这个地方,我确定这个变量的类型是某个特定的类型,可以安全地使用该类型的方法或属性

```typescript
function printId(id: number | string | boolean): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase())
        return
    }

    if (typeof id === "number") {
        console.log(id.toFixed(2))
        return
    }

    if (typeof id === "boolean") {
        console.log(id === true ? "true" : "false")
        return
    }
}

printId("abc")
printId(1.2345)
printId(true)
```

```
ts-node --compiler-options '{"module":"commonjs"}' type_guards.ts
ABC
1.23
true
```