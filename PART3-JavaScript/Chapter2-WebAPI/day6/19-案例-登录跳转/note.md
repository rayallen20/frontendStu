# 19-案例-登录跳转

## 1. 需求

- 用户名和密码为必填项
- 必须勾选同意服务条款
- 以上条件都满足时才能提交表单
- 提交表单后跳转至首页

## 2. 实现

### 2.1 用户名和密码为必填项

- 给input元素加`required`属性
- 通过`input`事件监听输入框的输入，判断是否显示错误提示
- 以上2种方式都可以

### 2.2 必须勾选同意服务条款

- 使用状态位记录勾选状态

### 2.3 以上条件都满足时才能提交表单

- 监听`form`的`submit`事件,阻止默认行为
- 若可以提交,则将用户名保存至`LocalStorage`中
  - 因为后边有个业务要回显用户名

### 2.4 提交表单后跳转至首页

- `window.location.href = '首页地址'`

## 3. 讲解

### 3.1 提交表单后跳转至首页

- 这里我按他的写法,也没有跳转