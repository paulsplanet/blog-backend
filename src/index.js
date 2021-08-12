require('dotenv').config();
const Koa = require("koa");
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const { PORT } = process.env;

const api = require('./api');

const app = new Koa();
const router = new Router();

// set up router
router.use('/api', api.routes());

// apply bodyParser
app.use(bodyParser());

// apply router on app
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(port, () => {
    console.log('Listening to port %d', port);
});