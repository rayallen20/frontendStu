# 08-let和var关键字

## 1. var关键字

- 在较旧的JavaScript中,使用关键字`var`来声明变量,而不是`let`
- 现在开发中一般不再使用`var`,只是我们可能在老版程序中看到它
- `let`就是为了解决`var`的一些问题而出现的

## 2. var关键字的缺陷

- 可以先使用再声明(不合理)
- `var`声明过的变量可以重复声明(不合理)
- 比如变量提升、全局变量、没有块级作用域等等

## 3. 结论

`var`就是个bug,声明变量统一使用`let`