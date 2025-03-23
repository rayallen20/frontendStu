# 2-事件对象和传递参数

```html
<template id="my-app">
    <button @click="btnClick">自动传入event对象</button>
    <!--$event实参是Vue中的固定写法-->
    <!--$event实参可以写在实参列表的任意位置-->
    <button @click="btnClick2('coderWhy', 18, $event)">手动传入event对象和其他实参</button>
</template> 
```