# 0-准备工作

## 1. 创建项目

```
vue create 01_learn_component
```

- 功能还是只选择`Babel`即可

## 2. 删除用不到的文件

- 由于此处只是为了讲解,不需要用到`src/assets`和`src/components`,所以先删除

```
tree ./ -I node_modules
./
├── README.md
├── babel.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│         ├── favicon.ico
│         └── index.html
├── src
│         ├── App.vue
│         └── main.js
└── vue.config.js

2 directories, 10 files
```

## 3. 编辑`App.vue`

```vue
<template>
    <div>
        Welcome to Your Vue.js
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {}
}
</script>

<style>
#app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
```