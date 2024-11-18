# 13-按钮

## 1. 按钮的语法

```html
<button>按钮</button>
```

## 2. 按钮的属性

- `type`：按钮的类型
  - `submit`：提交按钮.默认功能为点击后提交数据到后端
  - `reset`：重置按钮.点击后将表单控件恢复默认值
  - `button`：普通按钮.通常配合JS使用(是`type`属性的默认值)

## 3. 注意事项

按钮需配合`form`标签使用，否则无法触发表单的提交事件

```html
<form action="https://www.baidu.com">
    <button type="submit">提交</button>
</form>
```