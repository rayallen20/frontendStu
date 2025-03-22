# 07-v-html指令

- `v-html`: 用于将数据以HTML的形式渲染到元素中
  - `v-html="msg"`: 将msg中的数据以HTML的形式渲染到元素中
  - 等价于`DOM.innerHTML = msg`
  - 因此,即使原标签里有内容,也会被覆盖