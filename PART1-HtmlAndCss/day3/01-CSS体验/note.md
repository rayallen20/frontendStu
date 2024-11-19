# 01-CSS体验

## 1. CSS定义

层叠样式表(Cascading Style Sheets,缩写为CSS),是一种样式表语言,用来描述HTML文档的呈现(美化内容)

书写位置: `title`标签下方添加`style`双标签.`style`标签里面书写CSS代码

```html
<title>网页标题</title>
<style>
    /* 选择器 */
    p {
        /* 属性: 值; */
        color: red;
    }
</style>
```

属性名和属性值是成对出现的(键值对).

`<style>`标签是HTML,`<style>`标签里面的内容是CSS