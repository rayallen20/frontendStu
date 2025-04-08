# 2-非Props的属性与属性继承

- 非Props的属性: 当父组件给子组件传递某个属性,而这个属性在子组件的props或emits中没有定义,那么这个属性就是非Props的属性
  - 常见的非Props的属性:
    - class
    - style
    - id
- 属性继承: **当组件只有单个根节点时**,这些非Props的属性将被自动添加到根节点的属性中

## 2.1 传递非Props属性

- 直白点的表达就是: 只要父组件传递的Props属性在子组件中没有定义,那么这个属性就是非Props属性
  - 注: 非Props属性不能用作传递数据,仅仅会在子组件的根节点上作为属性存在
- 只是针对class/style这种属性,Vue会自动合并到根节点上,其他的属性则不会

- 子组件`ShowMessage.vue`:

```vue
<template>
  <div class="show-message">
  </div>
</template>

<script>
  export default {
    name: 'ShowMessage',
  }
</script>
```

- 父组件`App.vue`:

```vue
<template>
    <!--父组件传递了一个非Props属性-->
    <ShowMessage :myAtrr="myAttr"></ShowMessage>
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
            myAttr : 'Hello Vue'
        }
    },
}
</script>
```

在浏览器中可以看到:

```
<div class="show-message" myatrr="Hello Vue"></div>
```

## 2.2 属性的合并

- 针对class/style这种属性,Vue会自动**合并**到根节点上,其他的属性则不会

- 子组件`ShowMessage.vue`:

```vue
<template>
    <div class="show-message text">
        一些文字
    </div>
</template>

<script>
export default {
    name: 'ShowMessage',
}
</script>

<style scoped>
.text {
    text-decoration: underline;
}

.red {
    color: red;
}
</style>
```

- 父组件`App.vue`:

```vue
<template>
    <ShowMessage :class="color"></ShowMessage>
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
            color: 'red'
        }
    },
}
</script>
```

在浏览器中可以看到:

```
<div data-v-3facdf4a="" class="show-message text red"> 一些文字 </div>
```

## 2.3 禁用非Props的属性继承

- 如果不想让Vue自动合并非Props的属性,可以使用`inheritAttrs: false`来禁用
- 在模板中,可以使用`$attrs`来获取所有非Props的属性

- 子组件`ShowMessage.vue`:

```vue
<template>
    <div class="show-message">
        该子组件没有定义任何props属性
        <h4 :class="$attrs.class"> {{$attrs.id}} - {{$attrs.name}}</h4>
    </div>
</template>

<script>
export default {
    name: 'ShowMessage',
    // 禁用属性继承
    inheritAttrs: false,
}
</script>
```

- 父组件`App.vue`:

```vue
<template>
    <ShowMessage id="coder" class="why" name="coder-why"></ShowMessage>
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

此时在浏览器中,子组件的渲染结果为:

```
<div class="show-message"> 
  该子组件没有定义任何props属性 
  <h4 class="why">coder - coder-why</h4>
</div>
```

注: 如果没有设置`inheritAttrs: false`,则渲染结果为:

```
<div class="show-message why" id="coder" name="coder-why"> 
  该子组件没有定义任何props属性 
  <h4 class="why">coder - coder-why</h4>
</div>
```

## 2.4 子组件存在多个根节点的情况

- 当子组件存在多个根节点时,如果没有显式绑定非Props属性,则控制台会出现警告

- 子组件`ShowMessage.vue`:

```vue
<template>
    <div class="show-message">该子组件没有定义任何props属性</div>
    <div class="show-message">该子组件没有定义任何props属性</div>
    <div class="show-message">该子组件没有定义任何props属性</div>
</template>

<script>
export default {
    name: 'ShowMessage',
}
</script>
```

- 父组件`App.vue`:

```vue
<template>
    <ShowMessage id="coder" class="why" name="coder-why"></ShowMessage>
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

此时控制台警告:

```
ShowMessage.vue:13 [Vue warn]: Extraneous non-props attributes (id, class, name) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes. 
  at <ShowMessage id="coder" class="why" name="coder-why" > 
  at <App>
```

需要手动绑定非Props属性到任何一个元素上:

```vue
<template>
    <div class="show-message">该子组件没有定义任何props属性</div>
    <div class="show-message">该子组件没有定义任何props属性</div>
    <div class="show-message" :class="$attrs.class">该子组件没有定义任何props属性</div>
</template>

<script>
export default {
    name: 'ShowMessage',
}
</script>
```