# 02-阻止冒泡

- 问题: 因为有冒泡阶段的存在,所以事件会冒泡到父元素,导致父元素的事件也被触发
- 需求: 把事件限制在当前元素内,则需要**阻止事件冒泡**
- 前提: 阻止事件冒泡需要拿到**事件对象**,所以需要在事件处理函数中传入事件对象
- 语法: `事件对象.stopPropagation()`
- 注意: 此方法用于**阻止事件流的传播**,不仅在冒泡阶段有效,在捕获阶段也有效

```javascript
DOM.addEventListener('click', function(event) {
  event.stopPropagation()
});
```