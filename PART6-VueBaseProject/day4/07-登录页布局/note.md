# 07-登录页布局

- `element-plus`中,组件名即为类名
- 一些插槽的类名只能在控制台里找
- `deep:(子组件类名)`:可以在`<style scoped>`中修改子组件的样式

- 表单相关的一些组件和属性:
  - `label-width`属性: 表单标签的宽度
  - `el-form-item`组件: 有点像原生的`<label>`标签的作用,包裹表单元素用的
    - `label`属性: 表单标签的内容
  - `:model`属性: 表单数据的绑定对象
  - `autocomplete`属性: 表单的自动补全
    - 值为`"on"`/`"off"`时,表示开启/关闭自动补全
  - `show-password`属性: 显示密码输入框的切换按钮