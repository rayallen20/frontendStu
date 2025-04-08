# 4-运行与打包

- `package.json`中的`scripts`字段可以配置一些命令,方便我们运行和打包项目

```json
{
  "scripts": {
    "serve": "vue-cli-service serve",     // 开发环境,启动项目的脚本
    "build": "vue-cli-service build"      // 生产环境,打包项目的脚本
  }
}
```

- `npm run serve`: 自动监听8080端口,实时编译代码,方便开发
- `npm run build`: 打包项目,生成`dist`目录,用于生产环境部署