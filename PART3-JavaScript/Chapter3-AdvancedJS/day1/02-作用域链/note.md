# 02-作用域链

- 作用域链: 由嵌套关系的作用域组成的链条
- 变量查找规则: 就近原则
  - 当前作用域内能找到,则直接使用 
  - 当前作用域用找不到,则会逐级查找父级作用域直到全局作用域
  - 都找不到则提示错误,这个变量没有被定义过
- 子作用域能访问父作用域的变量,但是父作用域不能访问子作用域的变量