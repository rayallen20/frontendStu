# 2-认识 Composition API

- Options API的特点:在对应的属性中编写对应的功能,例如:
  - 在`data`中定义数据
  - 在`methods`中定义方法
  - 在`computed`中定义计算属性
  - 在`watch`中监听属性改变
  - 在组件中定义生命周期
- Options API的弊端:
  - 代码逻辑分散
  - 当组件变大/变复杂时,逻辑关注点的列表就会变长,同一个功能的逻辑会分散在各个地方