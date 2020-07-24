const Post = require('../models/post');

// post list
//exports.index = (req, res) => res.send('posts index');
exports.index = (req, res) => {
  Post.find({}).exec((err, result) => res.send(result));
}

//exports.create = (req, res) => res.send('posts create');
exports.create = (req, res) => {
  const post = new Post({
    title: 'test1',
    timestamp: Date.now(),
    published: false,
    comments: [],
    content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
  });
  post.save();
  return res.send('post created');
}

exports.show = (req, res) => res.send('post show ' + req.params.id);

exports.update = (req, res) => res.send('post update ' + req.params.id);

exports.destroy = (req, res) => res.send('post destroy ' + req.params.id);
