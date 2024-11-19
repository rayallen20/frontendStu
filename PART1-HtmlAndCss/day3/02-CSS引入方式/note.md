# 02-CSS引入方式

## 1. 内部样式表

CSS代码写在style标签里面.这种方式仅在学习时使用

## 2. 外部样式表

CSS代码写在单独的CSS文件中(`.css`),在HTML中使用`link`标签引入

```html
<link rel="stylesheet" type="text/css" href="style.css">
```

## 3. 行内样式

适合用于少量的样式,通常配合JS使用.CSS写在标签的`style`属性值里

```html
<div style="color: red; font-size: 20px">Hello World</div>
```