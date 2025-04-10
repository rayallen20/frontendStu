# 10-作业-设备管理

## 1. 需求

1. 关闭弹层: 点击**弹层右上角**`X`和**取消按钮**可以关闭弹层,关闭后弹层表单输入的内容**清空**
2. 查询设备: 搜索框输入内容后,**显示**清除图标,列表显示设备名**模糊匹配**的设备,点击清除图标**清空**搜索内容
3. 新建设备: 点击新建设备显示弹层,输入内容**点击确定**后,设备列表**新增数据**,新增设备可被查询
4. 删除设备: 点击删除设备后,删除对应设备,删除后的设备不可被查询
5. 启动停用: **点击**操作栏开关**启动**或**停用**设备,新建设备默认为**关闭**状态
6. 全部启用: 勾选状态与点击控制
    - 当所有设备均启用时,勾选框**选中**
    - 当任意设备停用时,勾选框**取消选中**
    - 点击勾选框,勾选框选中时,所有设备**启用**
    - 点击勾选框,勾选框未选中时,所有设备**停用**
7. 暂无设备: 当设备列表**无设备**时,显示暂无设备
8. 设备数量: 新增或删除设备时,**左下角**设备数量同步更新
9. 本地缓存: 刷新页面,**数据不丢失**
    - 新增设备时,本地缓存同步新增
    - 删除设备时,本地缓存同步删除
    - 启用停用设备时,本地缓存同步更新

## 2. 实现

### 2.1 搜索

- 难点: 不能修改`equipList`,因为`equipList`要被watch监听,所以不能直接修改
- 解决:
  - 设置标量,用于表示视图层显示的是`equipList`还是`searchList`
  - 把搜索结果保存在`searchList`中,`equipList`不变
- 问题:
  - 如果对搜索结果的item做操作,是否会影响到`equipList`中的item?