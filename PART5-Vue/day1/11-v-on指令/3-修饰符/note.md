# 3-修饰符

```html
<template id="my-app">
    <div :class="{area: isArea}" @click="divClick" @click.right="divRightClick">
        <button @click.stop="btnClick">阻止事件传播的按钮</button>
        <button @click.right.stop="btnRightClick">阻止事件传播的按钮(单击右键事件)</button>
    </div>
    <input type="text" @keyup.enter="enterKeyUp">
</template>
```

- `.stop`: 阻止事件传播(`event.stopPropagation()`)
- `.prevent`: 阻止默认事件(`event.preventDefault()`)
- `.capture`: 使用事件捕获模式
- `.self`: 只有事件是由自己触发的时候才会触发事件处理函数(相当于事件委托的处理函数中,判断了`event.target`)
- `.once`: 事件只触发一次
- `.left`: 只有鼠标左键点击时才会触发事件处理函数(只能在`@click`后边使用)
- `.right`: 只有鼠标右键点击时才会触发事件处理函数(只能在`@click`后边使用)
- `.middle`: 只有鼠标中键点击时才会触发事件处理函数(只能在`@click`后边使用)
- `keyAlias`: 键盘按键别名(只能在`@keyup`和`@keydown`后边使用)
    - `.enter`
    - `.tab`
    - `.delete` (捕获"删除"和"退格"键)
    - `.esc`
    - `.space`
    - `.up`
    - `.down`
    - `.left` (`@click.left`和`@keyup.left`中的`.left`不是一个事件,一个是鼠标左键,一个是键盘左箭头)
    - `.right`
- `.passive`: 使用`{passive: true}`模式添加监听器