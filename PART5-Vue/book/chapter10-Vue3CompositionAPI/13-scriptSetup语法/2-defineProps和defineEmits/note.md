# 2-defineProps和defineEmits

- 在`<script setup>`语法中,必须使用`defineProps()`函数来声明组件的props,必须使用`defineEmits()`函数来声明组件需要触发的事件
  - `defineProps()`函数和`defineEmits()`函数都是只在`<script setup>`中才能使用的编译器宏,它们不需要导入,且会随着`<script setup>`处理过程一起被编译
  - `defineProps()`函数接收的值和Options API中的`props`选项完全相同
  - `defineEmits()`函数接收的值和Options API中的`emits`选项完全相同
  - 传入`defineProps()`和`defineEmits()`的选项会从setup中提升到模块的作用域
    - 因此,传入的选项不能引用在setup作用域中声明的局部变量.这样做会引起编译错误
    - 但是,它可以引用导入的绑定,因为它们也在模块作用域内
