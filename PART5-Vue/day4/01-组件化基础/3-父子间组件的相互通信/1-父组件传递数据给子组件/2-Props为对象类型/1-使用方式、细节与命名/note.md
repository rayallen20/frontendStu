# 1-使用方式、细节与命名

## 1. 使用方式

- 子组件`ShowMessage.vue`:

```vue
<template>
    <div class="show-message">
        <h4>{{title}}</h4>
        <h4>{{content}}</h4>
    </div>
</template>

<script>
export default {
    name: 'ShowMessage',
    props: {
        // 子组件声明要接收title属性, 类型为String
        title: String,
        
        // 子组件声明要接收content属性
        content: {
            // 类型为String
            type: String,
            // 必须传递 不传递则控制台报错
            required: true,
            // 若父组件没有传递content属性 则使用默认值
            default: '默认内容'
        }
    }
}
</script>
```

- 父组件`App.vue`:

```vue
<template>
    <ShowMessage :title="title" :content="content"></ShowMessage>
</template>

<script>
import ShowMessage from "./components/ShowMessage.vue"

export default {
    name: 'App',
    components: {
        ShowMessage,
    },
    data() {
        return {
            title: '我是标题title',
            content: '我是内容content',
        }
    },
}
</script>
```

## 2. 细节

- type:
    - 支持的类型: String, Number, Boolean, Array, Object, Date, Function, Symbol
    - 可以以数组形式定义多个可能得类型
        - 例: `type: [String, Number]`
- required: 是否必须传递
- default: 默认值
    - 引用类型的默认值必须是一个工厂函数
    - 函数类型的默认值必须是一个函数
- validator: 自定义验证器

### 2.1 多个可能的类型

```vue
<template>
    <div class="show-message">
        <h4>{{propA}}</h4>
    </div>
</template>

<script>
export default {
    name: 'ShowMessage',
    props: {
        propA: {
            type: [String, Number]
        }
    }
}
</script>
```

### 2.2 带有默认值的引用类型

- 带有默认值的引用类型,其默认值必须从一个工厂函数返回
- 原因: 确保每个组件实例的默认值的引用不同(可以认为是一种数据层面的隔离)

```vue
<template>
    <div class="show-message">
        <h4>{{propB.username}}</h4>
        <h4>{{propB.age}}</h4>
    </div>
</template>

<script>
export default {
    name: 'ShowMessage',
    props: {
        propB: {
            type: Object,
            // 带有默认值的引用类型 其默认值必须从一个工厂函数返回
            // 原因: 确保每个组件实例的默认值的引用不同(可以认为是一种数据层面的隔离)
            default() {
                return {
                    username: 'Tom',
                    age: 18,
                }
            }
        }
    }
}
</script>
```

### 2.3 自定义验证器

- 例: 检测:
    - propC属性必须是一个对象
    - 必须包含username属性
    - age属性值必须大于18

```vue
<template>
    <div class="show-message">
        <h4>{{propC.username}}</h4>
        <h4>{{propC.age}}</h4>
    </div>
</template>

<script>
export default {
    name: 'ShowMessage',
    props: {
        propC: {
            type: Object,
            validator(value) {
                if (!value.hasOwnProperty('username')) {
                    return false
                }

                return value.age >= 18
            }
        }
    }
}
</script>
```

- 注: 若父组件传递的属性值不符合校验器规则,则会在控制台报错,但子组件中依然能够访问到这些不符合校验规则的属性值
  - 这也说明,这种校验机制更多的像是一种**声明**

### 2.4 函数的默认值

- 函数属性的默认值也是一个函数,但不是工厂函数,而是一个用作默认值的函数

```vue
<template>
    <div class="show-message">
        <h4>{{propD()}}</h4>
    </div>
</template>

<script>
export default {
    name: 'ShowMessage',
    props: {
        propD: {
            type: Function,
            default() {
                return 'this is a default function define in child component'
            }
        }
    }
}
</script>
```

## 3. Props命名规范

- HTML中,属性名不区分大小写,浏览器会自动将所有大写字符解析为小写字符
- 因此,命名Props时,也有camelCase和kebab-case两种命名方式
- 只是如果使用kebab-case命名方式,需要给Props加上`'`
- 推荐使用camelCase风格为Props命名

### 3.1 camelCase命名方式

- 子组件`ShowMessage.vue`:

```vue
<template>
  <div class="show-message">
    <h4>{{messageInfo}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'ShowMessage',
    props: {
      // camelCase (推荐使用)
      messageInfo: {
        type: String,
      }
    }
  }
</script>
```

此时,父组件传递Props时,有2种命名方式:

- 方式1: camelCase风格

```vue
<template>
    <ShowMessage :messageInfo="messageInfo"></ShowMessage>
</template>

<script>
import ShowMessage from "./components/ShowMessage.vue"

export default {
    name: 'App',
    components: {
        ShowMessage,
    },
    data() {
        return {
            messageInfo : 'Hello Vue'
        }
    },
}
</script>
```

- 方式2: kebab-case风格

```vue
<template>
    <ShowMessage :message-info="messageInfo"></ShowMessage>
</template>

<script>
import ShowMessage from "./components/ShowMessage.vue"

export default {
    name: 'App',
    components: {
        ShowMessage,
    },
    data() {
        return {
            messageInfo : 'Hello Vue'
        }
    },
}
</script>
```

### 3.2 kebab-case命名方式

- 子组件`ShowMessage.vue`:

```vue
<template>
    <div class="show-message">
        <!--
        即使Props的命名风格为kebab-case
        模板中的Props的命名风格也要使用camelCase
        -->
        <h4>{{messageInfo}}</h4>
    </div>
</template>

<script>
export default {
    name: 'ShowMessage',
    props: {
        // kebab-case (不推荐)
        'message-info': {
            type: String,
        }
    }
}
</script>
```

- 父组件传递Props的方式不变,还是上述2种方式