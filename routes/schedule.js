const router = require('koa-router')();
const schedule = require('node-schedule');
let sch = null;

router.prefix('/api');

router.get('/schedule', async (ctx, next) => {
    if (sch) {
        ctx.body = {
            result: false
        };

        return;
    }
    // https://www.npmjs.com/package/node-schedule
    sch = schedule.scheduleJob('0 * * * * *', function(fireDate){
        console.log('当秒数为0时打印！实际触发时间是：', fireDate);
    });

    ctx.body = {
        result: true
    };
});

module.exports = router;