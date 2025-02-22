# 20-作业-点击tab切换

## 1. 需求

- 点击不同tab栏,底部显示不同的内容

## 2. 实现

- 给每个span注册点击事件
- step1. 清除所有span的active类名
- step2. 给当前点击的span添加active类名
- step3. 获取当前点击的span的索引
- step4. 找到arr中索引对应的数据
- step5. 根据该数据创建DOM元素
- step6. 使用该DOM元素替换`.tab_theme`中的元素