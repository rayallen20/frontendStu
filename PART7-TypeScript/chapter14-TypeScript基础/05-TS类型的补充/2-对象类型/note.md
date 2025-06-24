# 2-对象类型

- 对象类型作为函数参数时,必须指定每个属性的类型

```typescript
function printPoint(point: {x: number, y: number}): void {
    // 使用解构赋值来提取 point 对象的 x 和 y 属性
    const {x, y}: {x: number, y: number} = point;

    // 打印 x 和 y 的值
    console.log(`x: ${x}, y: ${y}`);
}
```

- 属性之间可以用`,`分隔,也可以用`;`分隔
- 属性的类型也是可选的,若不指定,则默认为any类型
- 在对象类型中,属性名后添加`?`表示该属性是可选的

```typescript
function printPoint2(point: { x: number; y: number; z?: number }): void {
    console.log(`x: ${point.x}, y: ${point.y}, z: ${point.z}`);
}

printPoint2({ x: 1, y: 2 });
printPoint2({ x: 10, y: 20, z: 30 });
```

```
ts-node --compiler-options '{"module":"commonjs"}' demo2.ts
x: 1, y: 2, z: undefined
x: 10, y: 20, z: 30
```