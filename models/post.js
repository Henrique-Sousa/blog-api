const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  timestamp: { type: Date, required: true },
  published: { type: Boolean, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: Comment }],
  content: { type: String, required: true },
}) 

module.exports = mongoose.model('Post', PostSchema);
