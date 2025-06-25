# 4-类型别名

- 类型别名(Type Alias)是TypeScript中用于给类型定义一个新的名字的功能
  - 比如对象类型和联合类型,当有多个地方需要使用同一个对象类型或联合类型时,就可以使用类型别名来给这种类型起一个别名

```typescript
type PointType = {
    x: number
    y: number
    z?: number // 可选属性
}

type IdType = string | number | boolean

function printIdType(id: IdType): void {
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

const idStr: IdType = "abc"
printIdType(idStr)

const idNum: IdType = 1.2345
printIdType(idNum)

const idBool: IdType = true
printIdType(idBool)
```

```
ts-node --compiler-options '{"module":"commonjs"}' type_alias.ts
ABC
1.23
true
```