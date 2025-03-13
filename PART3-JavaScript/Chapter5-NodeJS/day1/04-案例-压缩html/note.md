# 04-案例-压缩html

## 1. 需求

- 把回车符(`\r`)和换行符(`\n`)去掉进行压缩,写入到新html文件中

## 2. 实现

- 读取源html文件内容
- 正则替换字符串
- 写入到新的html文件中

```
tree ./ -L 1
./
├── dist
└── public

2 directories
```

- `dist`: 存放压缩后的html文件
- `public`: 存放源html文件