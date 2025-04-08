# 2-工程结构

```
├── 02-create-vite-demo
│         ├── README.md
│         ├── index.html
│         ├── jsconfig.json
│         ├── package.json
│         ├── public                # 静态资源(不参与打包)
│         │         └── favicon.ico
│         ├── src                   # 源码
│         │         ├── App.vue     # 根组件
│         │         ├── assets      # 静态资源(参与打包,如图片/字体/全局样式等)
│         │         │         ├── base.css
│         │         │         ├── logo.svg
│         │         │         └── main.css
│         │         ├── components  # 存放Vue3组件的目录
│         │         │         ├── HelloWorld.vue
│         │         │         ├── TheWelcome.vue
│         │         │         ├── WelcomeItem.vue
│         │         │         └── icons
│         │         │             ├── IconCommunity.vue
│         │         │             ├── IconDocumentation.vue
│         │         │             ├── IconEcosystem.vue
│         │         │             ├── IconSupport.vue
│         │         │             └── IconTooling.vue
│         │         └── main.js     # 入口文件
│         └── vite.config.js        # vite配置文件
└── note.md
```