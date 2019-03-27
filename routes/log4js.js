const router = require('koa-router')();
const log4js = require('../utils/log');

router.prefix('/api');

router.get('/log4js', async (ctx, next) => {
    log4js.resLogger(ctx);

    ctx.body = {
        result: true
    };
});

module.exports = router;