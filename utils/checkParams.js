/**
 * 此文件是基于 joi ，设置每个接口的参数格式
 * https://github.com/hapijs/joi
 */

const Joi = require('joi');

// 校验的格式
let paramsFormat = {
    post: {
        joi: {                      // url末尾是joi
            must: Joi.string(),     // 必须为非空字符串
        }
    }
};

let query = ['get', 'delete'];

// 检测参数
let checkParams = function(ctx) {
    let method = ctx.method.toLowerCase(),
        lastIndexStart = ctx.url.lastIndexOf('/'),
        lastIndexEnd = ctx.url.lastIndexOf('?') > -1 ? ctx.url.lastIndexOf('?') : ctx.url.length,
        path = ctx.url.substring(lastIndexStart + 1, lastIndexEnd),
        test = null;
    // 没有path，则异常
    if (!path) {
        return {
            error: true
        };
    }
    // 根据请求方式，判断不同的数据位置
    if (~query.indexOf(method)) {
        test = ctx.query;
    } else {
        test = ctx.request.body;
    }
    
    let value = Joi.validate(test, paramsFormat[ method ][ path ], { allowUnknown: true, abortEarly: true });

    return value;
}

module.exports = {
    checkParams
};