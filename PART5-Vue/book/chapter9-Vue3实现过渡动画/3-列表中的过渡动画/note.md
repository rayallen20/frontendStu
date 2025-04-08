# 3-列表中的过渡动画

- `<TransitionGroup>`组件:用于在列表中添加过渡动画
  - 这里的列表是指`v-for`渲染的列表,不是指`<ul>`和`<ol>`标签
- `<TransitionGroup>`和`<Transition>`的区别
  - 默认情况下,`<TransitionGroup>`不会渲染容器元素,但可以通过传入`tag`属性来指定一个元素作为容器元素进行渲染
  - `mode`属性不可用,因为在`<TransitionGroup>`组件中,不再是2个互斥的元素之间进行切换的显示逻辑
  - CSS的过渡类会被应用在列表的元素上,而非容器元素上