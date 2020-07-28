const express = require('express');
const mongoose = require('mongoose');
const posts_router = require('./routes/posts');
const comments_router = require('./routes/comments');

if (process.env.NODE_ENV != 'production') {
    require("dotenv").config();
}

const mongoDB = ((process.env.NODE_ENV == 'production') ? process.env.MONGODB_URI : process.env.MONGODB_DEV_URI);
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/posts', posts_router);
app.use('/posts/:post_id/comments', comments_router);

const port = process.env.PORT || '3000';
app.listen(port, () => console.log('app listening on port ' +  port));
