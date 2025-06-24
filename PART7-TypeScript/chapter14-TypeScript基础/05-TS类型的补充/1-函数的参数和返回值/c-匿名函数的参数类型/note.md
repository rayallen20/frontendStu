# c-匿名函数的参数类型

- 若TS的编译器能够确定匿名函数在哪里被调用以及如何被调用,则可以自动推断出匿名函数的参数类型,因此可以省略参数类型的注解
- 匿名函数中,不省略参数类型注解,则形参列表必须不能省略`()`:

```typescript
const names: string[] = ['Alice', 'Bob', 'Charlie'];
names.forEach((name: string) => {
    console.log(`Hello, ${name}!`);
})
```

- 实际上可以简写为:

```typescript
const names: string[] = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => {
    console.log(`Hello, ${name}!`);
})
```