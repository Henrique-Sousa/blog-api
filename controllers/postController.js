const Post = require('../models/post');

// post list
exports.index = (req, res) => {
  Post.find({}).exec((err, result) => res.send(result));
}

exports.create = (req, res) => {
  const post = new Post({
    title: req.body.title,
    timestamp: Date.now(),
    published: false,
    comments: [],
    content: req.body.content
  });
  post.save();
  return res.send(post);
}

exports.show = (req, res) => {
  Post.findById(req.params.post_id, (err, result) => {
    res.send(result);
  });
}

exports.update = (req, res) => {
  const edited_post = new Post({
    title: req.body.title,
    timestamp: Date.now(),
    published: req.body.published,
    comments: req.body.comments,
    content: req.body.content,
    _id: req.params.post_id
  });
  Post.findByIdAndUpdate(req.params.post_id, edited_post, {}, err => {
    res.send(edited_post);
  });
}

exports.destroy = (req, res) => {
  Post.findByIdAndDelete(req.params.post_id, (err, deleted_post) => {
    res.send(deleted_post);
  });
}
