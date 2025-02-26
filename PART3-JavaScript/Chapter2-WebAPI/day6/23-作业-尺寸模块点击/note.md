# 23-作业-尺寸模块点击

## 1. 需求

- 被点击的span添加绿色边框
- 其他span去掉绿色边框

## 2. 实现

- 原有边框为:`border: 1px solid #e4e4e4`
- 点击时的边框为: `border: 1px solid #27BA9B`

- step1. 设置所有span的边框为原有边框
- step2. 给被点击的span设置边框为点击时的边框
  - 这里也还是添加/移除`active`类即可