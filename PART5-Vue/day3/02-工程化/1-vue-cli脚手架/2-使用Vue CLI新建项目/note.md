# 2-使用Vue CLI新建项目

## step1. 新建项目

```
vue create 01_vuecli_demo


Vue CLI v5.0.8
? Please pick a preset: (Use arrow keys)
❯ Default ([Vue 3] babel, eslint) 
  Default ([Vue 2] babel, eslint) 
  Manually select features 
```

- `Default ([Vue 3] babel, eslint)`: 默认配置,Vue3版本,使用babel和eslint
- `Default ([Vue 2] babel, eslint)`: 默认配置,Vue2版本,使用babel和eslint
- `Manually select features`: 手动选择配置

这里选择`Manually select features`即可

- 注:`vue create xxx -m npm`
  - `-m`表示使用npm作为包管理器,而不是默认的yarn
  - `npm`和`yarn`都是包管理器,用来安装和管理项目依赖的工具

## step2. 选择所需功能

```
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
❯◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◯ Router
 ◯ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```

这里为了简单起见,就选个`Babel`即可

## step3. 选择Vue.js的版本

```
? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
❯ 3.x 
  2.x 
```

选3.x即可

## step4. 选择存放配置的位置

```
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files 
  In package.json 
```

- `In dedicated config files`:将Babel/ESLint等配置放到各自独立的配置文件中
- `In package.json`:将Babel/ESLint等配置统一放到`package.json`中

这里选择`In dedicated config files`即可

## step5. 是否保存这个配置

```
? Save this as a preset for future projects? (y/N) 
```

为了演示,这里选`y`,保存这个配置

## step6. 给预设命名

```
? Save preset as: 
```

这里随便起个名字即可,比如`my-preset`

## step7. 安装成功

```
Run `npm audit` for details.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project 01_vuecli_demo.
👉  Get started with the following commands:

 $ cd 01_vuecli_demo
 $ npm run serve
```

- 注: 在`.vue`文件中,使用`vbase-3`命令可以直接生成一套模板