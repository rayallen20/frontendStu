# 4-useSlots和useAttrs

- `useSlots()`函数: 等价于`setup()`函数的第2个参数`context`的`slots`属性
- `useAttrs()`函数: 等价于`setup()`函数的第2个参数`context`的`attrs`属性
- 注意: 这两个函数不是编译器宏,而是运行时函数,所以需要`import`