import Router from 'koa-router';
import posts from './posts';
import auth from './auth';

const api = new Router;

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());

/*
api.get('/test', ctx => {
    ctx.body = 'test is very successful'
});
*/

export default api;