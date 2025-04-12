# 3-setup函数中的this

- [setup API](https://vue.zhcndoc.com/api/composition-api-setup.html#composition-api-setup)中写到:
  - `setup()`自身并不含对组件实例的访问权,即:在`setup()`中访问`this`会是`undefined`