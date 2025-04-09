# 15-加载更多

- [List组件](https://vant-ui.github.io/vant/#/zh-CN/list)
- 请求回来的新数据要拼接到原有数据之后,不能覆盖,否则响应式数据变化后,仍然只有10条数据
- 对`loading`和`finished`的标量改变必须在`onLoad`函数中,否则不生效
- 设置该组件在初始化时立即执行滚动位置检查,就可以不用在`created()`中手动调用一次`onLoad`了
- `loading`变量需要手动修改为`true`,否则会持续触发加载事件