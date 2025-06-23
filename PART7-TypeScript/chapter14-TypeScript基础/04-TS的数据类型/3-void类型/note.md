# 3-void类型

- void类型:
  - 用于指定一个函数没有返回值
  - 这种场景下,函数的返回值类型也可以是undefined
    - 注意undefined类型既是类型也是值

```typescript
function sum(a: number, b: number): void {
    console.log(a + b);
}

function sum2(a: number, b: number): undefined {
    console.log(a + b);
}
```