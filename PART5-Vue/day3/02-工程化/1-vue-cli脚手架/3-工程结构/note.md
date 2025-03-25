# 3-工程结构

```
./
├── README.md
├── babel.config.js
├── jsconfig.json           # 用于代码智能提示的配置文件 该配置文件标注这个目录是一个JavaScript项目
├── package-lock.json
├── package.json
├── public                  # 项目资源(不参与webpack打包)
│         ├── favicon.ico
│         └── index.html
├── src                     # 存放代码
│         ├── App.vue       # 项目的App根组件
│         ├── assets        # 存放资源(图片/字体/全局样式等)
│         │         └── logo.png
│         ├── components    # 存放Vue组件
│         │         └── HelloWorld.vue
│         └── main.js       # 入口文件
└── vue.config.js           # Vue CLI脚手架的配置文件

4 directories, 12 files
```

- `.browserslistrc`: 兼容目标浏览器的配置文件(供Babel/PostCSS使用)