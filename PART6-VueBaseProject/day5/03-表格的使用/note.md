# 03-表格的使用

- `el-table`:表格组件
  - `:data`: 表格的数据
  - 通常会给表格加`style="width: 100%"`,使表格宽度自适应
  - `border`: 是否显示边框,值为`true`或`false`
  - `stripe`: 是否显示斑马纹,值为`true`或`false`
- `el-table-column`: 表格列组件
  - `prop`: 列对应的数据字段
  - `label`: 列的标题
  - `width`: 列的宽度
    - 若有的列给了宽度有的列没给,则没给宽度的列会平分剩余宽度
  - `fixed`: 固定列,值为`left`或`right`
  - `align`: 列的对齐方式,值为`left`/`center`/`right`