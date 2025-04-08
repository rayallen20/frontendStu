# 08-作业-百度云盘文件列表

## 1. 需求

1. 渲染数据: 将提供的数据**绑定**到页面对应的位置,文件夹和文件分别显示对应**图标**
2. 全选功能: 点击全选勾选框时,满足以下条件
    - 点击全选勾选框,全选勾选框选中时,所有文件勾选框**选中**
    - 点击全选勾选框,全选勾选框未选中时,所有文件勾选框**取消选中**
    - 当所有文件均勾选时,全选勾选框**选中**
    - 当任意文件未勾选时,全选勾选框**取消选中**

```javascript
    const args = {
        template: '#my-app',
        data() {
            return {
                fileList: [
                    {
                        name: '01-PPT',
                        updateTime: '2023-11-11 11:11',
                        size: '-',
                        id: 1697420179352,
                        isFile: false,
                        select:false
                    },
                    {
                        name: '02-CODE',
                        updateTime: '2023-11-11 11:11',
                        size: '-',
                        id: 1697420179353,
                        isFile: false,
                        select:false
                    },
                    {
                        name: '03-笔记',
                        updateTime: '2023-11-11 11:11',
                        size: '-',
                        id: 1697420179354,
                        isFile: false,
                        select:false
                    },
                    {
                        name: '04-作业',
                        updateTime: '2023-11-11 11:11',
                        size: '-',
                        id: 1697420179355,
                        isFile: false,
                        select:false
                    },
                    {
                        name: 'README.md',
                        updateTime: '2023-11-11 11:11',
                        size: '147.2KB',
                        id: 1697420179356,
                        isFile: true,
                        select:false
                    },
                    {
                        name: 'day01.xmind',
                        updateTime: '2023-11-11 11:11',
                        size: '155.3KB',
                        id: 1697420179357,
                        isFile: true,
                        select:false
                    }
                ],
            }
        },
    }
```