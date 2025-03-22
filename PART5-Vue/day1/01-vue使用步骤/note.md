# 01-vue使用步骤

- [Vue](https://cn.vuejs.org/): 用于构建用户界面的渐进式框架

- step1. 准备容器
  - 只能有一个根元素(1个容器)
- step2. 引包
  - [引入方式](https://v2.cn.vuejs.org/v2/guide/installation.html#%E7%9B%B4%E6%8E%A5%E7%94%A8-lt-script-gt-%E5%BC%95%E5%85%A5)
- step3. 创建Vue实例
- step4. 指定配置项
  - 挂载点/数据等
- step5. 使用数据
  - 插值表达式(`{{}}`)/指令(`v-`)

## 1. vue3相关

- `Vue.createApp({}).mount('#app')`: 创建Vue实例并挂载到指定容器
- 创建实例时的参数说明:
  - `template`: 定义模板(也就是`DOM.innerHTML`)
    - 使用`<script type="text/x-template" id="template">`可以定义模板
  - `data`: 定义数据
    - vue3中,该属性必须是一个函数,该函数必须返回一个对象
  - `methods`: 定义方法
    - 该属性必须是一个对象,对象中的每个属性都是一个方法
    - 在`methods`中定义的方法,`this`指针指向`data`函数返回的对象
    - 在`methods`中定义的方法,不能使用箭头函数,因为箭头函数中的`this`指向的是外层的`this`,而非`data`函数返回的对象