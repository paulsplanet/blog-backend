import Router from 'koa-router';
import * as postsCtrl  from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

/*
posts.get('/:id', postsCtrl.getPostById, postsCtrl.read);
posts.delete('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.getPostById, postsCtrl.remove);
posts.patch('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.getPostById, postsCtrl.update);
*/
const post = new Router();
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;