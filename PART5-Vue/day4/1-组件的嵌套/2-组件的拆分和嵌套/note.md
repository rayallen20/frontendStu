# 2-组件的拆分和嵌套

将页面拆分成:

- Header
- Main
    - MainBanner
    - MainProductList
- Footer

这5个组件

- 在`src`目录下新建`components`目录,并在`components`目录下新建
- `Header.vue`
- `Main.vue`
- `MainBanner.vue`
- `MainProductList.vue`
- `Footer.vue`

```
tree ./
./
├── Footer.vue
├── Header.vue
├── Main.vue
├── MainBanner.vue
└── MainProductList.vue
```

## 2.1 Header.vue

```vue
<template>
    <div class="header">
        <h4>Header</h4>
        <h4>NavBar</h4>
    </div>
</template>

<script>
export default {
    name: "Header",
}
</script>
```

- 通常会给组件添加`name`属性,方便调试

## 2.2 MainBanner.vue

- 先实现`MainBanner`和`MainProductList`组件,然后在`Main.vue`中引入这两个组件即可

```vue
<template>
  <h4>Banner轮播图内容</h4>
</template>

<script>
  export default {
    name: "MainBanner"
  }
</script>
```

## 2.3 MainProductList.vue

```vue
<template>
  <ul>
    <li>商品信息1</li>
    <li>商品信息2</li>
    <li>商品信息3</li>
    <li>商品信息4</li>
    <li>商品信息5</li>
  </ul>
</template>


<script>
  export default {
    name: 'MainProductList'
  }
</script>
```

## 2.4 Main.vue

```vue
<template>
    <div class="main">
        <!--step3. 使用组件-->
        <MainBanner></MainBanner>
        <MainProductList></MainProductList>
    </div>
</template>
<script>
// step1. 导入轮播图和商品列表组件
import MainBanner from "./MainBanner.vue"
import MainProductList from "./MainProductList.vue"

export default {
    name: 'Main',
    // step2. 注册局部组件
    components: {
        MainBanner,
        MainProductList
    }
}
</script>
```

## 2.5 Footer.vue

```vue
<template>
  <div class="footer">
    <h4>Footer</h4>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>
```

## 2.6 App.vue

```vue
<template>
    <!--step3. 使用组件-->
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
</template>

<script>
// step1. 导入组件
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
    name: 'App',
    components: {
        // step2. 注册局部组件
        Header,
        Main,
        Footer
    },
}
</script>

<style>
.header, .main, .footer {
    border: 1px solid #999999;
    margin-bottom: 4px;
}
</style>
```