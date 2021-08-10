const Router = require('koa-router');
const posts = require('./posts');

const api = new Router;

api.use('/posts', posts.routes());

api.get('/test', ctx => {
    ctx.body = 'test is very successful'
});

module.exports = api;