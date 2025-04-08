# 02-工程化

## 1. vue-cli脚手架

### 1.1 安装vue-cli

### 1.2 使用vue-cli新建项目

### 1.3 工程结构

### 1.4 运行与打包

### 1.5 vueCli配置文件说明

## 2. create-vue脚手架

### 2.1 create-vue脚手架

### 2.2 工程结构

### 2.3 运行与打包

### 2.4 vueCli配置文件说明

## 3. `npm install -g`的问题

- 问题：全局安装的包时可能遇到权限问题,需要使用`sudo`命令,但是使用`sudo`命令安装的包在创建项目时,可能会遇到权限问题
- 解决:

- step1. 查看当前用户的id

```
id -u
```

- step2. 查看当前用户的组id

```
id -g
20
```

- step3. 修改`npm`全局安装的目录的权限

```shell
sudo chown -R $(id -u):$(id -g) ~/.npm
```