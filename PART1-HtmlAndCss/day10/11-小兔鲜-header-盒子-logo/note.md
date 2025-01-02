# 11-小兔鲜-header-盒子-logo

1. logo里边的a,href不要写`#`,即使是在首页上,也要写`href="./index.html"`
2. logo里边的a,要加title属性
3. 隐藏字体的其他方式:`text-ident: -9999em;`
    - 即: 让文字向左移动9999em,这样就移出屏幕了
    - 再加上`overflow: hidden;`,让溢出的文字隐藏
    - 这种方式用的更多