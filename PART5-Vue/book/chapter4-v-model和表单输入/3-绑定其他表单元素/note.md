# 3-绑定其他表单元素

## 3.1 绑定文本域

- 和绑定文本框一样,可以获得文本域的值

```html
<template id="my-app">
    <textarea cols="30" rows="3" v-model="intro"></textarea>
    <p>文本框输入的值: {{intro}}</p>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                intro: 'Hello'
            }
        },
    }
    
    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

## 3.2 绑定单选框

- 单选框的值是布尔值,因此需要使用`v-model`绑定一个布尔类型的变量
- 虽然都是`type=checkbox`,但是单选框可以不写`value`属性,因为单选框的值就是`true`或`false`(选中或未选中)

```html
<template id="my-app">
    <label for="agree">
        <input id="agree" type="checkbox" v-model="isAgree"> 同意协议
    </label>
    <p>单选框的值: {{isAgree}}</p>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                isAgree: false,
            }
        },
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

## 3.3 绑定复选框

- 绑定复选框时:
  - **必须为每个复选框的`input`元素添加`value`属性**
  - **`v-model`指令绑定的变量类型必须是数组,该数组中的元素即为选中的复选框的`value`属性值**
- 个人理解: 多个复选框绑定同一个变量,效果就和给多个复选框定义了同一个`name`属性是相同的

```html
<template id="my-app">
    <span>爱好: &nbsp;</span>

    <label for="basketball">
        <input id="basketball" type="checkbox" v-model="hobbies" value="basketball"> 篮球
    </label>

    <label for="football">
        <input id="football" type="checkbox" v-model="hobbies" value="football"> 足球
    </label>

    <label for="tennis">
        <input id="tennis" type="checkbox" v-model="hobbies" value="tennis"> 网球
    </label>

    <p>复选框的值: {{hobbies}}</p>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                hobbies: [
                    'basketball',
                ]
            }
        },
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

## 3.4 绑定单选按钮

- 必须为每个单选按钮的`input`元素添加`value`属性
- 多个单选按钮,其`v-model`指令绑定的必须是同一个变量
- 单选按钮的值是字符串,因此可以直接绑定一个字符串类型的变量

```html
<template id="my-app">
    <span>性别:&nbsp;</span>

    <label for="male">
        <input id="male" type="radio" v-model="gender" value="male"> 男性
    </label>

    <label for="female">
        <input id="female" type="radio" v-model="gender" value="female"> 女性
    </label>

    <p>单选按钮的值: {{gender}}</p>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                gender: '',
            }
        },
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

## 3.5 绑定下拉框(单选)

- 必须为每个`option`元素添加`value`属性
- 注: 
  - `select`元素的`size`属性: 设置下拉框的显示行数

```html
<template id="my-app">
    <span>喜欢的水果:&nbsp;</span>

    <select v-model="fruit" size="2">
        <option value="apple">苹果</option>
        <option value="orange">橘子</option>
        <option value="banana">香蕉</option>
    </select>

    <p>单选按钮的值: {{fruit}}</p>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                fruit: '',
            }
        },
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

## 3.6 绑定下拉框(多选)

- 允许多选时,`v-model`指令绑定的变量必须是数组
- 注: 
  - `select`元素的`multiple`属性: 设置下拉框允许多选
  - Shift键或拖拽都可以多选

```html
<template id="my-app">
    <span>喜欢的水果:&nbsp;</span>

    <select v-model="fruits" multiple size="2">
        <option value="apple">苹果</option>
        <option value="orange">橘子</option>
        <option value="banana">香蕉</option>
    </select>

    <p>单选按钮的值: {{fruits}}</p>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                fruits: [
                    'apple',
                ],
            }
        },
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```