# 03-自定义指令

- [自定义指令](https://cn.vuejs.org/guide/reusability/custom-directives.html#custom-directives):
  - 自定义指令主要是为了复用涉及普通元素的底层DOM访问和操作的代码

## 1. 全局自定义指令

- `main.js`:

```vue
import { createApp } from 'vue'
import App from './App.vue'

// 自定义指令的钩子函数
const focusDirective = {
    mounted(el) {
        el.focus()
    }
}

createApp(App).
directive('focus', focusDirective).     // 注册自定义指令
mount('#app')
```

- `App.vue`:

```vue
<template>
  <div class="box">
    <h3>需求1：让输入框立即获取焦点</h3>
    <div class="focus">
      <!-- 使用自定义指令 -->
      <input type="text" v-focus/>
    </div>
    <h3>需求2：Ajax请求数据，并设计loading指令</h3>
    <ul>
      <li class="news">
        <div class="left">
          <div class="title">5G渗透率持续提升，创新业务快速成长</div>
          <div class="info">
            <span>新京报</span>
            <span>2222-10-28 11:50:28</span>
          </div>
        </div>
        <div class="right">
          <img src="http://ajax-api.itheima.net/images/0.webp" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>
```

## 2. 指令的钩子函数

### 2.1 `created`

- `created`钩子函数在指令绑定元素时被调用,可以在这里进行一些初始化操作
- 此时可以访问`binding`,但不能操作DOM元素

### 2.2 `beforeMount`

- `beforeMount`钩子函数在绑定了自定义指令的元素即将挂载到DOM时被调用
- 此时可以修改元素的初始状态(例如样式),但无法保证元素被挂载

### 2.3 `mounted`

- `mounted`钩子函数在绑定了自定义指令的元素被挂载到DOM之后被调用
- 通常在这个阶段执行DOM操作(常用)

### 2.4 `beforeUpdate`

- `beforeUpdate`钩子函数在绑定了自定义指令的元素所在组件的数据变化,但DOM还未更新时被调用

### 2.5 `updated`

- `updated`钩子函数在绑定了自定义指令的元素所在组件的数据变化,DOM已经更新时被调用
- 用于执行更新后的DOM操作(比如计算样式)

### 2.6 `beforeUnmount`

- `beforeUnmount`钩子函数在绑定了自定义指令的元素即将被卸载时被调用

### 2.7 `unmounted`

- `unmounted`钩子函数在绑定了自定义指令的元素被卸载时被调用

## 3. 自定义指令的参数

- [钩子参数](https://cn.vuejs.org/guide/reusability/custom-directives.html#hook-arguments)
  - `el`: 绑定了自定义指令的元素
  - `binding`: 指令的绑定信息
    - `name`: 指令的名称
    - `value`: 指令的值
    - `oldValue`: 指令的旧值
    - `arg`: 指令的参数
    - `modifiers`: 指令的修饰符

## 4. 局部自定义指令

- `App.vue`:

```vue
export default {
    directives: {
        // 自定义指令
        focus: {
            // 指令的钩子函数
            mounted (el) {
                // 让输入框获取焦点
                el.focus()
            }
        }
    }
}
```

## 5. Ajax请求数据

- 请求期间转菊花的实现思路:
  - step1. 设置一个伪元素,伪元素中设置背景图
  - step2. 设置loading指令,在请求开始时给`ul`添加loading类,请求结束时移除loading类
    - 请求开始: 绑定了`v-loading`指令的元素被创建时,请求开始
    - 请求结束: 绑定了`v-loading`指令的元素被更新时,请求结束

```vue

```

## 6. 注意事项

- **不推荐在组件上使用自定义指令**,[原因见此处](https://cn.vuejs.org/guide/reusability/custom-directives.html#usage-on-components)