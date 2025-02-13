# 09-操作表单元素属性

## 1. type属性和value属性

- 比如密码框点击显示密码,就是把`input`的`type`属性从`password`改为`text`
- 属性选择器语法: 
  - `[attr]`: 选择具有`attr`属性的元素
    - 例: `doument.querySelector('[data-id]')`: 选择具有`data-id`属性的元素
  - `[attr=value]`: 选择`attr`属性值为`value`的元素
    - 例: `doument.querySelector('[data-id=1]')`: 选择`data-id`属性值为`1`的元素

## 2. 使用布尔值表示的一些属性

- `checked`属性: 表示是否选中(复选框和单选框)
- `disabled`属性: 表示是否禁用(按钮)
- `selected`属性: 表示是否选中(下拉框)