# 07-正则的替换方法

- `string.replace(正则, 替换的内容)`: 替换字符串中的内容
- 修饰符: 用于**约束**正则执行的某些细节行为,如是否区分大小写/是否支持多行匹配等
  - `i`: ignoreCase 忽略大小写
  - `g`: global 全局匹配
  - `m`: multiline 多行匹配