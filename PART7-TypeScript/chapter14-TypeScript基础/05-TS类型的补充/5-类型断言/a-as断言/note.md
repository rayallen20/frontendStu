# a-as断言

- TS中,有时无法获取具体的类型信息,这种场景下需要类型断言(Type Assertion)来告诉编译器变量的具体类型

- as断言:
  - 语法: `变量 as 类型`
  - 作用: 告诉编译器变量的具体类型,不进行类型检查
  - 注意: 使用时要确保变量确实是该类型,否则可能导致运行时错误

- 例1:

```typescript
const myEl = document.getElementById("my-img");
myEl.src = "https://www.typescriptlang.org/assets/images/icons/apple-touch-icon.png";   // Property src does not exist on type HTMLElement
```

- 这种场景下,就需要使用类型断言,将`HTMLElement`断言为`HTMLImageElement`:

```typescript
// 将 HTMLElement 的类型断言为 HTMLImageElement
const myEl = document.getElementById("my-img") as HTMLImageElement;
myEl.src = "https://www.typescriptlang.org/assets/images/icons/apple-touch-icon.png";
```

- 例2:

```typescript
class Person {}

class Student extends Person {
    studying(): void {
        console.log("Studying...");
    }
}

function sayHello(person: Person): void {
    const student = person as Student // 使用 as 断言将 person 断言为 Student 类型
    student.studying(); // 调用 Student 的方法
}

const student = new Student();
sayHello(student);
```

```
ts-node --compiler-options '{"module":"commonjs"}' demo2.ts
Studying...
```

- 注意: **TS只允许将类型断言为更具体或不太具体(例如undefined/any)的类型**,这个规则是为了防止不合理的强制转换(例如将一个string类型断言为number类型,这种转换可能会导致运行时错误)

- 例3:

```typescript
const messageStr: string = 'Hello World!';
const messageNum: number = messageStr as number; // Type 'string' is not assignable to type 'number'
```

```
TSError: ⨯ Unable to compile TypeScript:
demo3.ts:2:28 - error TS2352: Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

2 const messageNum: number = messageStr as number; // Type 'string' is not assignable to type 'number'
...
```

- 如果一定要进行这种转换,可以先将其转换为`unknown`,然后再转换为目标类型:

```typescript
const messageStr: string = 'Hello World!';
const messageNum: number = (messageStr as unknown) as number;
console.log(messageNum)
console.log(typeof messageNum)
```

```
ts-node --compiler-options '{"module":"commonjs"}' demo3.ts
Hello World!
string
```