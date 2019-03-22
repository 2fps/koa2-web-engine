const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onError = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')

// error handler
onError(app);

// middlewares
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'pug'
}))

// logger
app.use(async (ctx: any, next: any) => {
    const start: any = new Date()
    await next()
    const stop: any = new Date();
    const ms: any = stop - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err: any, ctx: any) => {
    console.error('server error', err, ctx)
});

module.exports = app
