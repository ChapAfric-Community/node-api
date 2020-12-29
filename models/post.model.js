const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    subtitle: {type: String, required: true},
    content: {type: String, required: true},
    photo: {type: String},
    datePublish: {type: Date, default: Date.now()},
    author: {type: String, required: true}
});

const Post = mongoose.model('posts', postSchema);

module.exports = Post;