const router = require('koa-router')();
const checkParams = require('../utils/checkParams').checkParams;

router.prefix('/api');

router.post('/joi', async (ctx, next) => {
    let result = {},
        res = {};

    try {
        // 检查数据
        // 数据格式再paramsFormat.js文件中
        result = checkParams(ctx);
    } catch(e) {
        result.error = true;
    }
    if (result.error) {
        res.result = false;
    } else {
        res.result = true;
    }
    ctx.body = res;
});

module.exports = router;