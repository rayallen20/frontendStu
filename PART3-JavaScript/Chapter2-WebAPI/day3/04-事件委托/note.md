# 04-事件委托

- 事件委托(Event Delegation): 将原本需要注册在子元素上的事件委托给父元素,让父元素担当事件监听器的角色
  - JS中注册事件的常用技巧,也称为事件委派/事件代理
- 使用事件委托的原因: 如果需要给多个元素注册事件,则需要利用循环,给每一个DOM对象注册事件
- 事件委托的原理: 利用事件冒泡的机制,当触发子元素的事件时,会冒泡到父元素身上,从而触发父元素的事件监听器
- `event.target.tagName`: 获取事件源的标签名
  - 注意: 这里拿到的标签名是大写的