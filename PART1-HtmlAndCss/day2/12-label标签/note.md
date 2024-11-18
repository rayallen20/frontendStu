# 12-label标签

## 1. label标签的作用

作用:网页中,某个标签的说明文本

经验:用`label`标签绑定文字和表单控件的关系,可以**增大表单控件的点击范围**

## 2. label标签的写法

### 2.1 写法1

- `label`标签只包裹内容,不包裹表单控件
- 设置`label`标签的`for`属性值和表单控件的`id`属性值相同

这种写法已经过时,不推荐使用.因为需要使用大量的`id`属性和`for`属性

```html
<label for="username">用户名:</label>
<input type="text" id="username">
```

### 2.2 写法2

使用`label`标签包裹文字和表单控件,不需要属性

```html
<label>
    <input type="radio" name="gender" value="male"> 男
</label>

<label>
    <input type="radio" name="gender" value="female"> 女
</label>
```

## 3. label标签的注意事项

针对单选框/复选框/下拉表单,通常`label`标签只包裹表单控件和选项文字,非选项文字则不被`label`标签包裹