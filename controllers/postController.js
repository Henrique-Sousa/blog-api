const Post = require('../models/post');

// post list
exports.index = (req, res) => {
  Post.find({}).exec((err, result) => res.send(result));
}

exports.create = (req, res) => {
  console.log(req.body.title);
  const post = new Post({
    title: req.body.title,
    timestamp: Date.now(),
    published: false,
    comments: [],
    content: req.body.content
  });
  post.save();
  return res.send('post created');
}

exports.show = (req, res) => res.send('post show ' + req.params.id);

exports.update = (req, res) => res.send('post update ' + req.params.id);

exports.destroy = (req, res) => {
  Post.findByIdAndDelete(req.params.id, err => {
    res.send('post destroy ' + req.params.id);
  });
}
