# 04-作用域

## 1. 全局作用域

- 作用于所有代码执行的环境(整个`script`标签内部)或者一个独立的js文件

## 2. 局部作用域

1. 函数作用域: 作用于函数内的代码环境
    - 函数内部的变量,如果没有使用`let`或者`const`声明,则会被提升为全局变量
2. 块级作用域: `{}`内部