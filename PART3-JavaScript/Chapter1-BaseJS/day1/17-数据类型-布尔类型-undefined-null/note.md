# 17-数据类型-布尔类型-undefined-null

## 1. 布尔值

- true/false

## 2. undefined

- 该类型只有1个值: undefined
- 在只声明变量,而不赋值的情况下,变量的默认值为undefined,通常很少直接给变量赋值为undefined
- 使用场景:
  - 在开发中经常声明一个变量,用于等待传送过来的数据
  - 如果我们不知道这个数据是否传递过来,此时我们可以通过检测这个变量是不是undefined,就判断用户是否有数据传递过来

## 3. null

- undefined表示变量未被赋值,即值不存在(期房)
- null表示赋值了,但这个值为空(毛坯房)
- `typeof null`返回的是`object`,即`null`在JS中被认为是一种对象类型
- 但这是一个bug,null并不是引用类型,而是基本数据类型