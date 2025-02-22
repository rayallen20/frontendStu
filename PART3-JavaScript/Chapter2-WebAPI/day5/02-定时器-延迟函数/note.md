# 02-定时器-延迟函数

- `let timer = setTimeout(callback, time)`: 延迟一段时间后执行回调函数
  - 返回值是一个定时器的标识,类型为`Number`
- `clearTimeout(timer)`: 清除延迟函数
- 与`setInterval`的区别:
  - `setInterval`是每隔一段时间执行一次回调函数
  - `setTimeout`是延迟一段时间后仅执行一次回调函数