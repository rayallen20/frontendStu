# 05-时间戳

- 使用场景: 倒计时效果
- JS中的时间戳单位是毫秒
- 算法:
  - `目标时间的时间戳 - 当前时间的时间戳 = 剩余时间的时间戳`
  - 将剩余时间的时间戳转换为年月日时分秒
- 获取时间戳的方式:
  - `new Date().getTime()`
  - `Date.now()`
    - 这种方式只能获取到当前时间的时间戳
  - `+new Date()`
    - 这种方式本质上是将Date对象转换为数字, 会调用Date对象的`valueOf()`方法
    - 推荐使用这种方式获取时间戳,因为这种方式可以直接获取指定时间的时间戳