# 2-配置细节

## 2.1 路由的默认路径

```javascript
// 配置路由映射表(从路径到组件的映射)
const routes = [
    {
        // /: 路由默认路径
        path: '/',
        // redirect: 配置重定向到哪个路径
        redirect: '/home',
    },
]
```

## 2.2 路由的history模式

- hash模式: 路由以`#`拼接
- history模式: 路由以`/`拼接

```javascript
// 创建路由对象
const option = {
    routes,
    // 指定使用history路由
    history: createWebHistory(),
}
```

## 2.3 路由的`<RouterLink>`组件

### a. `to`属性

- `to`属性: 指定跳转到的目标路径.该属性的值可以是字符串或对象

```vue
<RouterLink class="tab" :to="{path: '/home'}">首页</RouterLink>
```

- 注意: 若以对象形式传递`to`属性,则该属性必须使用`v-bind`指令绑定
  - **若以对象形式传递`to`属性,则可以使用路由的`name`属性指定跳转的目标路径**
- 注意: 不管使用何种数据类型配置该属性,都不影响路由配置(也就是`route/index.js`中的代码)
- 注意: 当`<RouterLink>`组件被点击时,实际上是把该组件的`to`属性值传递给了`router.push()`API(这里的`router`就是`route/index.js`中最后导出的`router`对象)

### b. `replace`属性

- `replace`属性: 使用`router.replace()`API替换当前路由
- 注意: 该属性的作用是用`<RouterLink>`组件中`to`属性的值**替换**页面当前的路由,因此当前页面不会被压入浏览器的历史栈中,所以也就无法使用浏览器的后退按钮返回到当前页面

```vue
<RouterLink class="tab" to="/about" replace>关于</RouterLink>
```

### c. `active-class`属性

- `active-class`属性: 指定当前`<RouterLink>`组件打包后的`<a>`标签在激活后应用的类名,默认是`router-link-active`
- 例: 当浏览器URL为` http://localhost:8080/about `时:

```vue
<RouterLink class="tab" to="/about" replace>关于</RouterLink>
```

对应的`<a>`标签为:

```html
<a data-v-7ba5bd90="" href="/about" class="router-link-active router-link-exact-active tab" aria-current="page">关于</a>
```

修改`active-class`属性:

```vue
<RouterLink class="tab" to="/about" replace active-class="why">关于</RouterLink>
```

对应的`<a>`标签为:

```html
<a data-v-7ba5bd90="" href="/about" class="why router-link-exact-active tab" aria-current="page">关于</a>
```

### d. `exact-active-class`属性

- `exact-active-class`属性: 指定当前`<RouterLink>`组件打包后的`<a>`标签在激活后应用的类名,默认是`router-link-exact-active`
- 注意: 该属性的作用是当`<RouterLink>`组件的`to`属性值与当前路由**完全匹配**时,才会应用该类名

```vue
<RouterLink class="tab" :to="{path: '/home'}" exact-active-class="why-coder">首页</RouterLink>
```

```html
<a data-v-7ba5bd90="" href="/home" class="router-link-active why-coder tab" aria-current="page">首页</a>
```

### e. `active-class`和`exact-active-class`属性的区别

#### e1. `active-class`

- 匹配规则: 当目标路由或**任何其嵌套的路由**被激活时,该组件都会添加这个类
- 例: 
  - `<RouterLink to="/user" active-class="active">用户</RouterLink>`
  - 当访问`/user`或`/user/profile`时,都会添加这个类
- 使用场景: 适用于导航菜单中,希望父级菜单项在任何子路由激活时都保持高亮的情况

#### e2. `exact-active-class`

- 匹配规则: 只有当目标路由**精确匹配当前路由**时,才会添加这个类
- 例:
  - `<RouterLink to="/user" exact-active-class="exact-active">用户</RouterLink>`
  - 访问`/user`时,会添加这个类
  - 访问`/user/profile`时,不会添加这个类
- 使用场景: 适用于需要精确匹配时才高亮的情况,如顶部导航或精确匹配的链接

### f. 路由的懒加载

- 问题的产生: 当路由组件较多,且这些路由组件都没有使用异步加载时,打包后的`app.js`文件会非常大,导致首屏加载变慢
- 解决方案: 使用路由的懒加载,将路由组件分割成多个小的代码块,按需加载

```javascript
// 配置路由映射表(从路径到组件的映射)
const routes = [
    {
        // /: 路由默认路径
        path: '/',
        // redirect: 配置重定向到哪个路径
        redirect: '/home',
    },
    {
        path: '/home',
        // 路由懒加载
        component: () => import('@/pages/HomePage.vue'),
    },
    {
        path: '/about',
        component: () => import('@/pages/AboutPage.vue'),
    }
]
```

- 此时打包后观察`dist`目录:

```
./dist/js
├── 176.e4f3de61.js       // HomePage.vue
├── 176.e4f3de61.js.map
├── 600.d9898d46.js       // AboutPage.vue
├── 600.d9898d46.js.map
├── app.939e4f7c.js       // main.js
├── app.939e4f7c.js.map
├── chunk-vendors.862ad4ac.js   // 第三方库的代码
└── chunk-vendors.862ad4ac.js.map

0 directories, 8 files
```

- 此时还有一个问题:分出来的包都是随机命名的,不利于后期维护
- 解决办法: 分包命名.在`import()`函数的参数中添加魔法注释,可以自定义分包名

```javascript
// 配置路由映射表(从路径到组件的映射)
const routes = [
    {
        // /: 路由默认路径
        path: '/',
        // redirect: 配置重定向到哪个路径
        redirect: '/home',
    },
    {
        path: '/home',
        // 使用魔法注释指定分包名
        component: () => import(/* webpackChunkName: "home-page-chunk" */'@/pages/HomePage.vue'),
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "about-page-chunk" */'@/pages/AboutPage.vue'),
    }
]
```

```
tree ./dist/js
./dist/js
├── about-page-chunk.ae036563.js
├── about-page-chunk.ae036563.js.map
├── app.82fc0fcf.js
├── app.82fc0fcf.js.map
├── chunk-vendors.862ad4ac.js
├── chunk-vendors.862ad4ac.js.map
├── home-page-chunk.eb065a2f.js
└── home-page-chunk.eb065a2f.js.map

0 directories, 8 files
```

### g. 路由的`name`属性和`meta`属性

- `name`属性: 给路由命名,要求该属性的值必须是字符串,且该属性值在路由映射表中必须唯一
- `meta`属性: 给路由添加元信息,要求该属性的值必须是对象,且该对象可以包含任意属性,该对象可以在组件中通过`$route.meta`属性或`useRoute()`函数访问

```javascript
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import(/* webpackChunkName: "home-page-chunk" */'@/pages/HomePage.vue'),
        // 指定路由名称
        name: 'home',
        // 为路由添加元数据
        meta: {
            name: 'why',
            age: 18,
        }
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "about-page-chunk" */'@/pages/AboutPage.vue'),
        name: 'about',
    }
]
```

- `HomePage.vue`:

```vue
<template>
    <div class="home-page">
        Home Page
    </div>
</template>

<script>
import {useRoute} from "vue-router";

export default {
    name: 'HomePage',
    setup() {
        // 注意: useRoute() 只能在 setup() 中使用
        const route = useRoute()
        console.log(route.name)     // home
        console.log(route.meta)     // { name: 'why', age: 18 }
    }
}
</script>
```