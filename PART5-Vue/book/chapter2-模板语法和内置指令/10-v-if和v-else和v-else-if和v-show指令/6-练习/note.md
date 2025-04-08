# 6-练习

```html
<template id="my-app">
  <p v-if="gender === 1">性别：♂ 男</p>
  <p v-else>性别：♀ 女</p>

  <hr>

  <p v-if="score >= 90">成绩评定A：奖励电脑一台</p>
  <p v-else-if="score >= 70 && score < 90">成绩评定B：奖励周末郊游</p>
  <p v-else-if="score >= 60 && score < 70">成绩评定C：奖励零食礼包</p>
  <p v-else>成绩评定D：惩罚一周不能玩手机</p>
</template>
```