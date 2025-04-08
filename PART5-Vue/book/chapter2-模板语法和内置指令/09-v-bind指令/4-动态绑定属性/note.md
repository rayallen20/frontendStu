# 4-动态绑定属性

- 所谓动态绑定属性,就是属性名和属性值都是变量
    - `:属性名="变量名"`

```html
<template id="my-app">
    <div :[name]="value">动态绑定属性和值</div>
</template>
```