# 08-页面加载事件

- **外部资源**(图片/外联CSS/外联JS)加载完毕时触发的事件
- 使用场景:
  - 页面资源全部处理完成后做一些事情
  - 一些老代码喜欢把`script`写在`head`中,这时候直接找DOM是找不到的,需要等页面加载完毕后再执行
- `window.addEventListener('load',function(){})`
  - `load`事件会等到页面**所有**资源加载完毕后再触发
  - `load`事件只能绑定一次
- 注意: 不仅可以监听整个页面资源加载完毕,也可以针对某个资源绑定`load`事件

- **DOMContentLoaded**: 当`HTML`文档被完全加载和解析完成之后触发,不需要等待样式表、图片等其他资源加载完成
  - `document.addEventListener('DOMContentLoaded',function(){})`
  - `DOMContentLoaded`事件比`load`事件更早触发,因为`load`事件需要等待所有资源加载完毕