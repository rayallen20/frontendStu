# 13-`<script setup>`语法

- `<script setup>`语法是默认推荐的,相比于`<script>`语法,它有以下优点:
  - 更少的样板内容
  - 可以使用TS声明props和抛出事件
  - 更好的运行时性能
    - 其模板会被编译成和`<script setup>`在同一作用域的渲染函数,无中间代理
  - 更好的IDE类型推断