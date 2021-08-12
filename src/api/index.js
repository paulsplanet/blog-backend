import Router from 'koa-router';
import posts from './posts';

const api = new Router;

api.use('/posts', posts.routes());

/*
api.get('/test', ctx => {
    ctx.body = 'test is very successful'
});
*/

export default api;