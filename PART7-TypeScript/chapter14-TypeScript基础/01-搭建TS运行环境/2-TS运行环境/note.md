# 2-TS运行环境

默认情况,如果想运行TS的代码,需要将其编译成JS代码,然后再运行编译后的JS代码:

- step1. 使用`tsc`命令编译TS代码,生成JS代码
- step2. 使用`node`命令运行编译后的JS代码;或者在浏览器中运行编译后的JS代码

如果想直接运行TS代码,可以使用`ts-node`命令(也有配置`webpack`等工具可以直接运行TS代码,但不常用):

- 安装`ts-node`:

```
sudo npm install ts-node -g
sudo chown -R $(id -u):$(id -g) ~/.npm
```

- 安装`ts-node`的依赖(`tslib`和`@types/node`):

```
sudo npm install tslib @types/node -g
sudo chown -R $(id -u):$(id -g) ~/.npm
```

- 测试:

- `main.ts`:

```typescript
function foo(name: string) {
    console.log(name.length);
}

foo("hello");
```

```
ts-node --compiler-options '{"module":"commonjs"}' main.ts
5
```

- 注: 
  - 若项目中没有`tsconfig.json`文件,则需要在运行时指定编译选项,如上例中的`--compiler-options '{"module":"commonjs"}'`
  - 如果不加这个选项,则会按照ES Module的方式编译,而不是CommonJS的方式,会导致运行时错误