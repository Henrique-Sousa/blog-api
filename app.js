const express = require('express');
const posts_router = require('./routes/posts');
const comments_router = require('./routes/comments');

const app = express();

app.use('/posts', posts_router);
app.use('/comments', comments_router);

app.listen(3000);
