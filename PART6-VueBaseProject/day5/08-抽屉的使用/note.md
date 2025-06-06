# 08-抽屉的使用

- `el-drawer`: 抽屉组件
  - `v-model`: 绑定控制抽屉显隐的变量
  - `title`: 抽屉标题
  - `close-on-click-modal`: 点击遮罩层是否关闭抽屉
  - `close-on-press-escape`: 按下ESC键是否关闭抽屉
  - `:before-close`: 关闭抽屉前的回调函数
    - `done`: 调用此函数可以关闭抽屉,该参数在被触发时会自动传入
  - `size`: 抽屉的大小,可以是`'50%'`或`'30%'`等百分比,也可以是具体的像素值如`'400px'`
  - `direction`: 抽屉的打开方向,可以是:
    - `'ltr'`(从左到右)
    - `'rtl'`(从右到左)
    - `'ttb'`(从上到下)
    - `'btt'`(从下到上)

- 为了复用抽屉,添加/编辑/预览用的是同一个抽屉组件,根据一个响应式状态位数据来控制抽屉的内容
- 注: 调整`el-form`中按钮位置的方式:

```vue
<el-form-item class="form-actions">
  <el-button type="primary">确认</el-button>
  <el-button>取消</el-button>
</el-form-item>
```

```scss
.form-actions :deep(.el-form-item__content) {
  display: flex;
  justify-content: flex-end; // 右对齐
  // 如果按钮之间距离太小可以加 gap
  gap: 12px;
}
```