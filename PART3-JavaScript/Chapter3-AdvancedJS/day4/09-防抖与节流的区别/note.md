# 09-防抖与节流的区别

- 防抖:
  - 单位时间内,频繁触发事件,只执行最后一次
  - 使用场景:
    - 搜索框输入
    - 手机号输入检测
    - 邮箱输入检测

- 节流:
  - 单位时间内,频繁触发事件,只执行1次
  - 使用场景: 各种高频事件
    - 鼠标移动(`mousemove`)
    - 页面尺寸缩放(`resize`)
    - 滚动条滚动(`scroll`)