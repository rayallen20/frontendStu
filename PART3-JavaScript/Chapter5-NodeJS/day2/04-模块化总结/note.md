# 04-模块化总结

## 1. NodeJS中的模块

- 每个文件就是一个模块

## 2. 模块化标准

### 2.1 CommonJS

- **通常用于Node项目中**
- 导出: `module.exports{}`或`exports{}`
- 导入: `require`

### 2.2 ES6

- **通常用于前端工程化项目中**

#### 2.2.1 默认导出

- 导出: `export default{}`
- 导入: `import xx from 'xx'`

#### 2.2.2 命名导出

- 导出: `export{}`或`export const xx = {}`
- 导入: `import {xx} from 'xx'`