# 5-tuple类型

## 5.1 tuple类型

- tuple类型: 多个元素的组合,元素之间可以是不同类型

```typescript
const info: [string, number, boolean] = ['Alice', 30, true];

const username: string = info[0];
console.log(username);

const age: number = info[1];
console.log(age);

const isActive: boolean = info[2];
console.log(isActive);
```

```
ts-node --compiler-options '{"module":"commonjs"}' tuple.ts
Alice
30
true
```

## 5.2 和array的区别

- array类型: 只能存放相同类型的元素
- tuple类型: 可以存放不同类型的元素,且通过索引访问到的值,其类型也是确定的

```typescript
const info_arr: any[] = ['Alice', 30, true];
const name_arr = info_arr[0];   // 此处IDE会提示类型为any
console.log(name_arr.length);

const info_tuple: [string, number, boolean] = ['Alice', 30, true];
const name_tuple = info_tuple[0]; // 此处IDE会提示类型为string
console.log(name_tuple.length);
```

```
ts-node --compiler-options '{"module":"commonjs"}' compare_with_array.ts
5
5
```

## 5.3 使用场景

- 通常tuple类型用作函数的返回值

```typescript
function useState(state: any): [any, (newState: any) => void] {
    let currentState = state;
    const changeState = (newState: any) => {
        currentState = newState;
    }

    return [currentState, changeState];
}

const [counter, changeCounter]: [number, (newState: number) => void] = useState(10);

console.log(counter); // 10
changeCounter(20);
console.log(counter); // 10
```

```
ts-node --compiler-options '{"module":"commonjs"}' usage.ts
10
10
```