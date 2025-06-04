# 12-菜单的属性

- 侧边栏: div + `el-menu`
    - `el-menu`: 简单理解就是菜单盒子
        - `el-menu-item`: 菜单项
        - `el-submenu`: 子菜单
            - `el-menu-item`: 子菜单项
- 有子项:

```vue
<el-submenu index="2">
  <template #title>一级菜单标题</template>
  <el-menu-item index="2-1">子项一</el-menu-item>
  <el-menu-item index="2-2">子项二</el-menu-item>
</el-submenu>
```

- 没有子项:

```vue
<el-menu-item index="1">就我自己</el-menu-item>
```

- `el-menu`的属性:
  - `router`: 是否开启路由模式,开启后表示使用`el-menu-item`的`index`属性值作为路由跳转的路径
  - `mode`: 菜单的模式,可选值为`horizontal`(水平)和`vertical`(垂直),默认为`vertical`
  - `background-color`: 菜单的背景色
  - `text-color`: 菜单的文字颜色
  - `active-text-color`: 菜单激活状态的文字颜色
  - `default-active`: 默认激活的菜单项的`index`值
    - `:default-active="$route.path"`: 使用当前页面的路由作为默认激活的菜单项
  - `default-openeds`: 默认展开的子菜单的`index`值数组
  - `unique-opened`: 是否只保持一个子菜单的展开状态(排他性),默认为`false`
- `el-menu-item`的属性:
  - `index`: 菜单项的唯一标识,用于路由跳转或激活状态
    - `index`的值可以是路由的名称
  - `route`: 路由对象,可以直接使用路由跳转