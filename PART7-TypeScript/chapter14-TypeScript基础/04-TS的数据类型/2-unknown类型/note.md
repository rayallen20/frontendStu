# 2-unknown类型

## 2.1 基本使用

- unknown类型:
  - 当确实不知道类型,而又希望强制调用方做类型检查(比如从外部API获取数据/`JSON.parse`的结果等)时使用
  - 只能赋值给any类型或unknown类型

- 基本使用:

```typescript
function foo() :string {
    return "abc"
}

function bar() :number {
    return 123
}

let flag = true
let result: unknown

if (flag) {
    result = foo()
} else {
    result = bar()
}

console.log(result)

// 以下赋值会报错 因为unknown类型只能赋值给any/unknown类型 不能赋值给其他类型
// let message :string = result // Type unknown is not assignable to type string
// let number :number = result // Type unknown is not assignable to type number
```

```
ts-node --compiler-options '{"module":"commonjs"}' unknown.ts
abc
```

## 2.2 与any类型的区别

### a. any类型

- 表示任意类型,相当于"关闭类型检查"
- 可以赋值给任意类型,也可以从任意类型赋值给any类型
- 使用时不会有类型提示,编译期也不会对any类型进行检查,极易产生运行时错误

```typescript
let fooDemo :any = 123;
fooDemo = "abc"; // any类型可以赋值为任意类型
fooDemo = {
    bar: true
};

// 对any类型调用任何方法都不会报错
fooDemo.toUpperCase();  // 这是一个string类型的方法 但使用any类型调用 在编译期不会报错(因为编译期不检查any类型)
fooDemo.notExistMethod(); // 这是一个不存在的方法 但使用any类型调用不会报错 在编译期不会报错(因为编译期不检查any类型)
```

- 注意:这段代码只是在编译期不会报错,在运行时同样会报错,因为JS的运行时是不认识TS的类型系统的

### b. unknown类型

- 也是表示"任意类型",但是比any更安全 
- 只能赋值给unknown和any类型(不能直接赋值给其它具体类型)
- 不能对它做任何操作,除非先进行类型检查或类型断言

```typescript
let fooDemo1 :unknown = 123;
fooDemo1 = "hello";
fooDemo1 = {
    bar: true,
};

// fooDemo1.toUpperCase(); // Property toUpperCase does not exist on type unknown
// fooDemo1.notExistMethod(); // Property toUpperCase does not exist on type unknown

// 对unknown类型做任何操作之前 必须先进行类型检查或类型断言
if (typeof fooDemo1 === "string") {
    let fooDemoStr :string = fooDemo1.toUpperCase(); // 类型检查通过后才能调用toUpperCase方法
    console.log(fooDemoStr);
}

let barProperty :boolean = (fooDemo1 as { bar: boolean}).bar; // 类型断言通过后才能访问bar属性
console.log(barProperty);
```

```
ts-node --compiler-options '{"module":"commonjs"}' unknown_demo.ts
true
```

|  特性  |  `any`   |    `unknown`     |
|:----:|:--------:|:----------------:|
| 类型检查 | 不进行类型检查  |    需要类型检查/断言     |
| 可赋值性 | 可赋值给任意类型 | 仅可赋值给any/unknown |
| 安全性  | 极不安全,易出错 |    更安全,鼓励类型收窄    |
| 适用场景 | 快速跳过类型系统 |    类型不确定时更推荐     |

- 结论: 更推荐使用`unknown`类型,因为它强制要求进行类型检查或断言,可以避免很多潜在的运行时错误
