# 09-缓存组件状态

- 踩坑:

不能按照这种写法:

```vue
<KeepAlive include="a,b">
  <component :is="view" />
</KeepAlive>
```

应该使用:

```vue
<RouterView v-slot="{ Component }">
    <KeepAlive :include="['HomePage']">
        <component :is="Component" />
    </KeepAlive>
</RouterView>
```

- 注意:当同时存在父/子/孙多个层级的组件嵌套时,若想要缓存孙组件,则需要缓存孙组件所在的组件链
- `<KeepAlive>`缓存的是**组件的实例**,这个组件实例不会被销毁,而是在**激活/停用**两个状态之间切换
- 调试:
  - `activated()`: 组件被激活时调用
  - `deactivated()`: 组件被停用时调用
  - 这两个钩子函数只在组件被缓存时才会被触发
  - 被缓存的组件重新激活时,不会触发`created()`和`mounted()`钩子函数