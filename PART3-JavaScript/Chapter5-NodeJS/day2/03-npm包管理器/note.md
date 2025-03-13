# 03-npm包管理器

## 1. 需求

- 使用`dayjs`包,格式化时间

## 2. 实现

- `npm init -y`: 初始化项目(`-y`表示默认配置)
- `npm install dayjs`: 安装`dayjs`包
  - 会把下载的包放到`node_modules`目录下(类似于PHP和GO的`vendor`目录)
  - 会在`package.json`文件中的`dependencies`字段中添加`dayjs`包的信息
  - 同时会固化版本(生成`package-lock.json`文件)

## 3. 安装依赖

- `npm install`: 安装`package.json`文件中的所有依赖(注意安装依赖时是不加包名的)

## 4. 全局软件包nodemon

- 本地软件包: 仅当前工程内可用
- 全局软件包: 所有工程都可用
  - 全局软件包是安装在系统目录下的,不会随着工程的删除而删除

- `npm install -g nodemon`: 安装全局软件包`nodemon`
  - `-g`表示全局安装 
  - `nodemon`是一个监视文件变化的工具,当文件发生变化时,会自动重启服务
  - 使用`nodemon`启动服务时,不需要每次修改代码后都要重启服务(热更新)

```
sudo npm install nodemon -g
Password:

added 29 packages in 21s

4 packages are looking for funding
  run `npm fund` for details
```

```
nodemon -v
3.1.9
```

```
nodemon server.js
```

## 5. 删除依赖

- `npm uninstall dayjs`: 删除`dayjs`包
  - 会把`node_modules`目录下的`dayjs`包删除
  - 会把`package.json`文件中的`dependencies`字段中的`dayjs`包信息删除
  - 同时会固化版本(生成`package-lock.json`文件)
- 删除全局包: `npm uninstall -g nodemon`