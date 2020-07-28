const Comment = require('../models/comment');
const Post = require('../models/post');

// comments list
exports.index = (req, res) => res.send('comments index');

exports.create = (req, res) => {
  const comment = new Comment({
    author: req.body.author,
    timestamp: Date.now(),
    content: req.body.content
  });
  comment.save().then(comment => {
    Post.findByIdAndUpdate(req.params.post_id, {"$push": {comments: comment._id}}, {}, (err, post) => {
      return res.send(comment);
    }); 
  });
}

exports.show = (req, res) => res.send('comment show ' + req.params.comment_id);

exports.update = (req, res) => res.send('comment update ' + req.params.comment_id);

exports.destroy = (req, res) => res.send('comment destroy ' + req.params.comment_id);

