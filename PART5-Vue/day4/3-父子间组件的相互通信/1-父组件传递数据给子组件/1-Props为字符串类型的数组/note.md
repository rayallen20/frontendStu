# 1-Props为字符串类型的数组

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
        // 表示子组件需要接收父组件传递的title和content属性
        props: ['title', 'content']
    }
</script>
```

- 子组件中的props表示子组件要接收父组件传递的属性
- 父组件有4种方式传递数据给子组件:

## 1.1 直接传递字符串

- 父组件`App.vue`:

```vue
<template>
    <!--方式1: 直接传递字符串-->
    <ShowMessage title="传递字符串的标题" content="传递标题的内容"></ShowMessage>
</template>

<script>
import ShowMessage from "./components/ShowMessage.vue"

export default {
    name: 'App',
    components: {
        ShowMessage,
    },
}
</script>
```

## 1.2 绑定字符串类型的变量

- 父组件`App.vue`:

```vue
<template>
    <!--方式2: 绑定字符串类型的变量-->
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

## 1.3 绑定对象中字符串类型的属性

- 父组件`App.vue`:

```vue
<template>
    <!--方式3: 绑定对象中字符串类型的属性-->
    <ShowMessage :title="message.title" :content="message.content"></ShowMessage>
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
            message: {
                title: '我是标题message.title',
                content: '我是内容message.content',
            }
        }
    },
}
</script>
```

## 1.4 直接绑定对象

- 父组件中传递对象时,子组件会自动解构对象中的属性

- 父组件`App.vue`:

```vue
<template>
    <!--方式4: 直接绑定对象-->
    <ShowMessage :="message"></ShowMessage>
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
            message: {
                title: '我是标题message.title',
                content: '我是内容message.content',
            }
        }
    },
}
</script>
```