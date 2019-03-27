const router = require('koa-router')();

router.prefix('/api');

router.post('/xss', async (ctx, next) => {
    ctx.body = {
        data: ctx.request.body
    };
});

module.exports = router;