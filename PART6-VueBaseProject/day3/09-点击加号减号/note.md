# 09-点击加号减号

- 和发送请求获取数据是同理的:
  - 先在`actions`中定义修改数量的网络请求
  - 再在`mutations`中定义修改`state`的操作
  - 当`actions`中的网络请求成功后,调用`mutations`中的方法来修改`state`