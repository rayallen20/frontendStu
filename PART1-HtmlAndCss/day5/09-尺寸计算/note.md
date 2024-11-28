# 09-尺寸计算

## 1. 默认情况的尺寸计算

**`盒子尺寸 = 内容尺寸 + border尺寸 + padding尺寸`**

- 默认情况下,`width`/`height`属性设置的是内容尺寸的大小

因此,给盒子加`border`/`padding`会**撑大**盒子

## 2. 解决办法1: 手动做减法

**手动做减法**,减掉`border`/`padding`增加的尺寸即可

## 3. 解决办法2: `box-sizing`属性

- `box-sizing`属性可以**改变**盒子的尺寸计算方式
- 这种是常用的方式

属性值:

- `content-box`: 默认值,`盒子尺寸 = 内容尺寸 + border尺寸 + padding尺寸`
- `border-box`: `盒子尺寸 = 内容尺寸`
  - 也就是说,这种模式下,`border`/`padding`的尺寸**不会**撑大盒子,而是往盒子的内部挤
  - 换言之,盒子的宽高不会因为`border`/`padding`的增加而改变