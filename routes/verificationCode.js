const router = require('koa-router')();
const svgCaptcha = require('svg-captcha');

router.prefix('/api');

router.get('/verificationCode', async (ctx, next) => {
    let captcha = svgCaptcha.create();

    console.log('验证码是：', captcha.text);

    ctx.body = {
        data: captcha.data,
        text: captcha.text
    };
});

module.exports = router;