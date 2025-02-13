# 07-Math对象的random方法

## 1. Math对象的random方法

- `Math.random()`: 返回一个0到1之间的随机数,包括0不包括1(`[0, 1)`)

## 2. 生成指定范围的随机数

- 生成`N`到`M`之间的随机数公式: 
  - `[N, M]`: `Math.floor(Math.random() * (M - N + 1)) + N`
  - `[N, M - 1]`: `Math.floor(Math.random() * (M - N)) + N`