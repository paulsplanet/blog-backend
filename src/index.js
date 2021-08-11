const Koa = require("koa");
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// set up router
router.use('/api', api.routes());

// apply bodyParser
app.use(bodyParser());

// apply router on app
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});