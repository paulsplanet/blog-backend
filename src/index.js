const Koa = require("koa");
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

/* basic of koa 
app.use(async(ctx, next) => {
    console.log(ctx.url);
    console.log(1);
    if (ctx.query.authorized !== '1') {
        ctx.status = 401; //unathorized
        return;
    }
    await next();
    console.log('End');
    
});

app.use((ctx, next) => {
    console.log(2);
    next();
});

app.use(ctx => {
    ctx.body = 'Hello, World';
});
*/

//router set up
router.get('/', ctx => {
    ctx.body = 'Home';
});

router.get('/about/:name?', ctx => {
    const { name } = ctx.params;
    ctx.body = name ? `${name}'s About` : `About`;
});

router.get('/posts', ctx => {
    const { id } = ctx.query;
    ctx.body = id ? `Post #${id}` : 'There is no Post'
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});