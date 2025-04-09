module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            // 给的若是2倍图 750px的宽度 那么设计稿的宽度是750 / 2 = 375px
            // 若是3倍图 1080px的宽度 那么设计稿的宽度是1080 / 3 = 360px
            viewportWidth: 375,
        },
    },
};
