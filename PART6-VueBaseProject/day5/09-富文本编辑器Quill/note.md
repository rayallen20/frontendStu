# 09-富文本编辑器Quill

- [中文文档](https://www.kancloud.cn/liuwave/quill/1409423)
- vue用的是[vue-quill-editor](https://www.npmjs.com/package/vue-quill-editor)

- 富文本编辑器的样式调整:

```scss
.ql-toolbar.ql-snow {
  width: 100% !important;
}

.quill-editor .ql-container {
  min-height: 220px !important;
  max-height: 320px !important;
  overflow-y: auto !important;
  border-radius: 4px;
}

.quill-editor .ql-editor {
  min-height: 180px !important;
  max-height: 280px !important;
  font-size: 16px;
  line-height: 1.5;
  overflow-y: auto !important;
  padding-bottom: 30px;
}

.quill-editor {
  width: 100% !important;
}
```

- 在入口文件里引入这个`scss`即可

- 对富文本编辑器的字段要单独校验,使用`el-form`的`validateField()`方法

```vue
<template>
    <QuillEditor
        class="quill-editor"
        v-model="newArticle.content"
        :toolbar="[
              ['bold', 'italic', 'underline'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'header': [1, 2, 3, false] }],
              ['link', 'image'],
              ['clean']
            ]"
        theme="snow"
        @blur="handleQuillBlur"
    ></QuillEditor>
</template>

<script setup>
    const newArticleForm = ref(null)

    const handleQuillBlur = async () => {
        if (newArticleForm.value) {
            try {
                await newArticleForm.value.validateField('content')
            } catch (err) {
                // 可以做自己的错误处理 (比如显示toast 或者什么都不做)
                console.warn('校验失败:', err)
            }
        }
    }
</script>
```

- 因为调整过富文本编辑器的宽高,所以还需要调整包裹它的`el-form-item`的样式,否则当错误提示出现时,会被"挤"到富文本编辑器内

```scss
.quill-editor-container {
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
}
```

- 这个富文本编辑器似乎有问题,后续用`WangEditor`替代