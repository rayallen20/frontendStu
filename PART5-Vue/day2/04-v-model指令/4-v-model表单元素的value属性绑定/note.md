# 4-v-model表单元素的value属性绑定

- 实际开发中,表单元素的`value`属性值有可能是:
  - step1. 先从服务器请求下来
  - step2. 在`data`中定义存储数据的变量
  - step3. 使用`v-bind`指令将`value`属性值绑定到`data`中的变量上
- 比如: 编辑用户信息时,表单元素的`value`属性值就是:
  - step1. 从服务器请求下来的数据
  - step2. 渲染到表单元素中
- 此时,代码如下:

```html
<input id="male" type="radio" :value="valueFromServer" v-model="gender">
```