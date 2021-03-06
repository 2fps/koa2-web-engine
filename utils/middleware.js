/** 
 * 此文件存放独立的过滤器
*/
const checkParams = require('./checkParams').checkParams;

let use = (app) => {
    // 数据校验中间件
    app.use(async (ctx, next) => {
        let result = {};
    
        try {
            // 检查数据
            // 数据格式再paramsFormat.js文件中
            result = checkParams(ctx);
        } catch(e) {
            result.error = true;
        }
    
        if (result.error) {
            ctx.body = {
                result: false,
                error: ''
            };
    
            return;
        }
        await next(); 
    });
};


module.exports = {
    use
};