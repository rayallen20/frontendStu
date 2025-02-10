# 02-逻辑中断

- 仅在`&&`与`||`中存在逻辑中断

## 1. `&&`中的逻辑中断

- `false && anything`中`anything`不会执行
- `true && anything`中`anything`会执行

## 2. `||`中的逻辑中断

- `true || anything`中`anything`不会执行
- `false || anything`中`anything`会执行

## 3. 使用场景

- 通常用于在函数调用时判断某个实参是否存在,如果存在则执行某个操作

## 4. 与默认参数的区别

- 默认参数主要处理形参
- 逻辑中断除了处理参数之外,还可以执行其他逻辑