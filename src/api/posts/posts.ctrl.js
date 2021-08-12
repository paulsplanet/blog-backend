let postId = 1; //initial value of Id

// initial data of posts Array
const posts = [
    {
        id: 1,
        title: 'Title',
        body: 'Body...',
    },
];

/* Writing Post
POST /api/posts
{ title, body }
*/
export const write = ctx => {
    const { title, body } = ctx.request.body;
    postId += 1;
    const post = { id: postId, title, body };
    posts.push(post);
    ctx.body = post;
};

/* Get Posting List
GET /api/posts
*/
export const list = ctx => {
    ctx.body = posts;
};

/* Get a Post with ID
GET /api/posts/:id
*/
export const read = ctx => {
    const { id } = ctx.params;
    const post = posts.find(p => p.id.toString() === id);
    if (!post) {
        ctx.status = 404;
        ctx.body = {
            message: "There is no post.",
        };
        return;
    }
    ctx.body = post;
};

/* Delelte a Post with ID
DELETE /api/posts/:id
*/
export const remove = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: "There is no post.",
        };
        return;
    }
    posts.splice(index, 1);
    ctx.status = 204;
};

/* Edit a Post
PUT /api/posts/:id
{ title, body }
*/
export const replace = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404,
        ctx.body = {
            message: "There is no post.",
        };
        return;
    }
    posts[index] = {
        id, 
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

/* Edit a specific area of post
PATCH /api/posts/:id
{ title, body }
*/
export const update = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: "There is no post.",
        };
        return;
    }
    posts[index] = {
        ...posts[index],
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};