# 1-TS编译环境

```
npm install typescript -g
sudo chown -R $(id -u):$(id -g) ~/.npm
```

```
tsc --version
Version 5.8.3
```

尝试编译:

```typescript
function sum(num1: number, num2: number) :number {
    return num1 + num2
}
```

```
tsc math.ts
```

生成的 `math.js` 文件:

```javascript
function sum(num1, num2) {
    return num1 + num2;
}
```