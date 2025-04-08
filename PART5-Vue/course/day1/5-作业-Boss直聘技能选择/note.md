# 5-作业-Boss直聘技能选择

## 1. 需求

1. 渲染数据: 将提供的数据**绑定**到页面对应的位置
2. 已选标签: 数据中`select`字段为`true`的数据对应显示**已选**列表中,**点击**标签时更改为可选
3. 可选标签: 数据中`select`字段为`false`的数据对应显示**可选**列表中,**点击**标签时更改为已选
4. 添加自定义标签:
    1. 输入框内容为空时,点击添加,**不处理**
    2. 当输入框内容不为空时,点击添加,在**已选**列表中新增标签
    3. 新增标签后,**清空**输入框内容
    4. 新增的自定义标签可以**点击切换**可选和已选的状态

## 2. 实现

```javascript
    const args = {
        template: '#my-app',
        data() {
            return {
                myArr: [1, 2, 3],
                myValue: this.getSelectedSkillList()
            }
        },
        methods: {
            getSelectedSkillList() {
                console.log(this.myArr) // undefined
                return 12
            }
        }
    }

    const app = Vue.createApp(args)
    app.mount('#app')
```

- 这里`undefined`的原因在于: `data()`中的`this`指向的是`data()`函数执行的上下文,而不是`Vue`实例
  - 换言之,在模板中调用`methods`中的函数,则其`this`指针是Vue的实例;
  - 而在`data`中调用`methods`中的函数,则其`this`指针是`data`函数的上下文
- 结论: 目前学到的技能,都不能**在`data`初始化时调用`methods`中的方法(前提是`methods`中的方法要访问`data`中的值`**

- 新增技能: 需要在添加元素之后,手动调用一次获取已选技能的方法