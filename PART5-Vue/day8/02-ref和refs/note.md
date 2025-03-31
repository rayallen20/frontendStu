# 02-ref和refs

- [`ref`属性](https://cn.vuejs.org/api/built-in-special-attributes.html#ref): 
  - 用于给组件或DOM元素注册引用信息
    - 用在DOM元素上,则表示引用是元素本身
    - 如果用于子组件上,引用是子组件的实例
      - 可以通过子组件的引用,调用子组件的方法或访问子组件的数据(可以修改数据但不推荐)
  - 通过`$refs`对象访问
  - 只在组件渲染完成后可用
  - 不会影响组件的渲染和性能
  - 所有添加了该属性的元素都会被添加到组件的`$refs`对象中

- [$refs](https://cn.vuejs.org/api/component-instance.html#refs):一个包含DOM元素和组件实例的对象

- 和之前使用的`document.querySelector`有何不同?
  - `document.querySelector`是原生JS的方法,可以获取DOM元素
  - `$refs`是Vue提供的,可以获取组件实例和DOM元素
  - `$refs`只能在组件渲染完成后使用,而`document.querySelector`可以在任何时候使用
  - `$refs`是响应式的,当引用的元素或组件被销毁时,引用会自动被删除
  - `$refs`是一个对象,可以通过属性名访问引用的元素或组件

## 1. 和`document.querySelector`的区别

例: 现有3个组件如下:

- 父组件`App.vue`

```vue
<template>
    <div>
        <h2>App组件</h2>
        <p>这是App组件中的p标签</p>
        <hr />
        <MyTest></MyTest>
        <hr />
        <MyForm></MyForm>
        <button>重置</button>
    </div>
</template>

<script>
import MyTest from './components/MyTest.vue'
import MyForm from './components/MyForm.vue'
export default {
    data () {
        return {}
    },
    components: {
        MyTest,
        MyForm
    }
}
</script>

<style lang="css" scoped></style>
```

- 子组件`MyTest.vue`

```vue
<template>
  <div>
    <h3>Test组件需求：找到下面的p标签，设置样式</h3>
    <p>这是Test组件中的p标签</p>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css" scoped></style>
```

- 子组件`MyForm.vue`

```vue
<template>
    <div>
        <h3>Form组件需求：点击按钮能够重置表单</h3>
        用户名：<input type="text" v-model="uname" /><br />
        手机号：<input type="text" v-model="phone" /><br />
    </div>
</template>

<script>
export default {
    data () {
        return {
            uname: 'zhangsan',
            phone: '13266668888'
        }
    }
}
</script>

<style lang="css" scoped></style>
```

### 1.1 修改`MyTest.vue`中的p标签的样式

#### a. 通过`document.querySelector`获取p标签,并修改样式

```vue
<template>
    <div>
        <h3>Test组件需求：找到下面的p标签，设置样式</h3>
        <p>这是Test组件中的p标签</p>
    </div>
</template>

<script>
export default {
    mounted() {
        const paragraphEle = document.querySelector('p')
        console.log(paragraphEle)   // 此处打印的是App组件中的p标签
        paragraphEle.classList.add('active')
    }
}
</script>

<style scoped>
  .active {
    color: red;
    font-size: 30px;
  }
</style>
```

此时发现页面上没有任何变化,这是因为:

- `document.querySelector`获取的是**整个文档**中第一个匹配的元素,而不是**当前组件**中的元素,因此选择到的是`App.vue`中的p标签
- 由于Vue中的作用域样式机制,`scoped`样式只会作用于当前组件中的元素,而无法作用在其他组件中的元素上(本质上是因为选择不到),因此样式没有生效

#### b. 通过`ref`属性和组件的`$refs`对象获取p标签,并修改样式

```vue
<template>
    <div>
        <h3>Test组件需求：找到下面的p标签，设置样式</h3>
        <p ref="paragraph">这是Test组件中的p标签</p>
    </div>
</template>

<script>
export default {
    mounted() {
        const paragraphEle = this.$refs.paragraph
        paragraphEle.classList.add('active')
    }
}
</script>

<style scoped>
.active {
    color: red;
    font-size: 30px;
}
</style>
```

注: 如果页面中存在多个`ref="paragraph"`的元素,则`this.$refs.paragraph`会返回最后一个元素,因此需要给每个元素设置不同的`ref`值

```vue
<template>
    <div>
        <h3>Test组件需求：找到下面的p标签，设置样式</h3>
        <p ref="paragraph">这是Test组件中的第1个p标签</p>
        <p ref="paragraph">这是Test组件中的第2个p标签</p>
        <p ref="paragraph">这是Test组件中的第3个p标签</p>
    </div>
</template>

<script>
export default {
    mounted() {
        const paragraphEle = this.$refs.paragraph
        console.log(paragraphEle)   // 最后一个ref="paragraph"的元素
        paragraphEle.classList.add('active')
    }
}
</script>

<style scoped>
.active {
    color: red;
    font-size: 30px;
}
</style>
```

注: 但如果`ref`属性是通过循环渲染的,则`this.$refs.paragraph`会返回一个数组,包含所有匹配的元素

```vue
<template>
    <div>
        <h3>Test组件需求：找到下面的p标签，设置样式</h3>
        <p v-for="index in num" :key="index" ref="paragraph">这是Test组件中的第{{index + 1}}个p标签</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 4
        }
    },
    mounted() {
        const paragraphEleCollection = this.$refs.paragraph
        console.log(paragraphEleCollection)     // 通过循环遍历渲染的元素 若有相同的ref值则会返回一个数组
        paragraphEleCollection.forEach(paragraph => paragraph.classList.add('active'))
    }
}
</script>

<style scoped>
.active {
    color: red;
    font-size: 30px;
}
</style>
```

### 1.2 重置`MyForm.vue`中的表单

- 这个案例要给子组件加`ref`属性,然后父组件通过`$refs`对象获取子组件的实例,并修改子组件的数据

```vue
<template>
    <div>
        <h2>App组件</h2>
        <p>这是App组件中的p标签</p>
        <hr />
        <MyTest></MyTest>
        <hr />
        <MyForm ref="myFormComponent"></MyForm>
        <button @click="resetForm">重置</button>
    </div>
</template>

<script>
import MyTest from './components/MyTest.vue'
import MyForm from './components/MyForm.vue'
export default {
    data () {
        return {}
    },
    components: {
        MyTest,
        MyForm
    },
    methods: {
        resetForm() {
            // 1. 通过refs获取组件实例
            const myFormComponent = this.$refs.myFormComponent

            // 2. 获取到组件实例中的元素
            const nameInput = myFormComponent.$refs.nameInput
            const phoneInput = myFormComponent.$refs.phoneInput

            // 3. 重置表单
            nameInput.value = ''
            phoneInput.value = ''
        }
    }
}
</script>

<style lang="css" scoped></style>
```

- 但是,通常不推荐这种做法,而是父组件获取到子组件后,调用子组件的方法来完成功能:

- 子组件`MyForm.vue`

```vue
<template>
    <div>
        <h3>Form组件需求：点击按钮能够重置表单</h3>
        用户名：<input type="text" v-model="uname" ref="nameInput" /><br />
        手机号：<input type="text" v-model="phone" ref="phoneInput" /><br />
    </div>
</template>

<script>
export default {
    data () {
        return {
            uname: 'zhangsan',
            phone: '13266668888'
        }
    },
    methods: {
        resetForm() {
            this.uname = ''
            this.phone = ''
        }
    }
}
</script>

<style lang="css" scoped></style>
```

- 父组件`App.vue`

```vue
<template>
    <div>
        <h2>App组件</h2>
        <p>这是App组件中的p标签</p>
        <hr />
        <MyTest></MyTest>
        <hr />
        <MyForm ref="myFormComponent"></MyForm>
        <button @click="resetForm">重置</button>
    </div>
</template>

<script>
import MyTest from './components/MyTest.vue'
import MyForm from './components/MyForm.vue'
export default {
    data () {
        return {}
    },
    components: {
        MyTest,
        MyForm
    },
    methods: {
        resetForm() {
            // 1. 通过refs获取组件实例
            const myFormComponent = this.$refs.myFormComponent

            // 2. 调用子组件的方法
            myFormComponent.resetForm()
        }
    }
}
</script>

<style lang="css" scoped></style>
```

## 2. `ref`属性和`$refs`对象的设计意图

- 让开发者可以专注于当前组件的DOM操作,而无需考虑整个文档的情况