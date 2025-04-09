# 05-配置路由

- 这里要注意的是,一级路由其实就相当于页面了,所以在`App.vue`中,只写一个`<RouterView>`即可
- 同一个路由若同时定义了`component`和`redirect`,则`component`会被忽略
  - 若重定向的目标路由是该路由的子路由,则该路由的`component`会被渲染