# 1-create-vue脚手架

- Vite: 和webpack类似,但是更快,更轻量,更适合vue3
- `create-vue`: 基于Vite的vue脚手架
- 安装: `npm install -g create-vue`
- 使用: `create-vue`命令即可

```
┌  Vue.js - The Progressive JavaScript Framework
│
◇  请输入项目名称：     # step1. 输入项目名称
│  02-create-vite-demo
│
◇  请选择要包含的功能： (↑/↓ 切换，空格选择，a 全选，回车确认)       # 此处为了演示,所有功能都不选择
│  none

正在初始化项目 /Users/yanglei/Desktop/frontendStu/PART5-Vue/day3/02-工程化/6-create-vue脚手架/02-create-vite-demo...
│
└  项目初始化完成，可执行以下命令：

   cd 02-create-vite-demo
   npm install
   npm run dev

| 可选：使用以下命令在项目目录中初始化 Git：
   
   git init && git add -A && git commit -m "initial commit"

```

- 注: 需提前安装Vite: `npm install -g vite`
- 注: 局部安装`create-vue`脚手架: `npm init vue@latest`
- `npm init vue@latest`的含义:
  - step1. 临时安装`create-vue@latest`脚手架
  - step2. 安装完成后立即执行`create-vue`命令来创建项目