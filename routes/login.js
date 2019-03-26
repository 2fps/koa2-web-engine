const router = require('koa-router')();
const RSA = require('../utils/RSA.js');

router.prefix('/api');

router.get('/publicKey', async (ctx, next) => {
    ctx.body = {
        result: true,
        secret: RSA.publicKey
    };
});

router.post('/login', async (ctx, next) => {
    let body = ctx.request.body,
        password = body.password;

        
    password = RSA.key.decrypt(password, 'utf8');

    console.log('解码为：', password);

    ctx.body = {
        result: true
    };
});

module.exports = router;