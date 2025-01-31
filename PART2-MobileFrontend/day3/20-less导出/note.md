# 20-less导出

- `// out: ./`: 导出到当前目录
- `// out: false`: 不导出

似乎这个设置只针对VSCode的插件有用,在WebStorm中并没有生效

通常的工程结构如下:

```
tree ./
./
├── css
│         └── index.css
├── less
│         └── index.less
└── note.md

2 directories, 3 files
```