# 25-作业-tab栏切换

## 1. 需求

- 点击不同的tab栏,展示不同的内容

## 2. 实现

- step1. 取消所有a的`active`类
- step2. 给被点击的a添加`active`类
- step3. 设置所有的`.cont .tab-pane`的`display`为`none`
- step4. 设置目标索引的`.cont .tab-pane`的`display`为`block`