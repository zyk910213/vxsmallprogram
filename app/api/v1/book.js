const Router = require('koa-router')
const router = new Router()

router.get('/v1/book',(ctx,next)=>{
    console.log('/v1/book');
    ctx.body={key:'/v1/book'};
})

module.exports = router