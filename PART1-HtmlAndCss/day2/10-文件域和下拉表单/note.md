# 10-文件域和下拉表单

## 1. 上传文件

默认情况,文件上传表单控件只能上传一个文件.添加`multiple`属性可以实现**文件多选**功能

```html
<input type="file" multiple>
```

## 2. 下拉菜单

```html
<select name="nativePlace" id="nativePlace">
    <option value="Beijing">北京</option>
    <option value="ShangHai">上海</option>
</select>
```

## 3. `option`标签的属性

- `selected`: 为选项设置默认选中状态
  - 多个选项同时设置`selected`属性,只有最后一个生效