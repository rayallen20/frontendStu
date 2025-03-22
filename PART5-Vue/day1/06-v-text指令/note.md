# 06-v-text指令

- `v-text`: 用于设置或更新元素的文本内容
  - `v-text="msg"`: 设置元素的文本内容为`msg`(`msg`是`data`返回的对象中的属性)的值
  - 等价于使用插值表达式`{{msg}}`
  - 相当于设置`DOM.textContent`属性值为`msg`的值