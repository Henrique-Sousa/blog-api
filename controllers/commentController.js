const Comment = require('../models/comment');
const Post = require('../models/post');

// comments list
exports.index = (req, res) => {
  Post.findById(req.params.post_id).populate('comments').exec((err, post) => {
    res.send(post.comments);
  });
}

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

exports.show = (req, res) => {
  let post_id = req.params.post_id;
  let comment_id = req.params.comment_id;
  Post.findOne({_id: post_id, comments: comment_id}).populate('comments').exec((err, post) => {
    if(!post) { return res.send({}); }
    return res.send(post.comments.find(comment => comment._id.equals(comment_id)));
    
  });
}

exports.update = (req, res) => {
  const edited_comment = new Comment({
    author: req.body.author,
    timestamp: Date.now(),
    content: req.body.content,
    _id: req.params.comment_id
  });
  Comment.findByIdAndUpdate(req.params.comment_id, edited_comment, {}, err => {
    res.send(edited_comment);
  });
}

exports.destroy = (req, res) => {
  Comment.findByIdAndDelete(req.params.comment_id, (err, deleted_comment) => {
    res.send(deleted_comment);
  });
}

