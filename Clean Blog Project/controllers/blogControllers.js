const Post = require('../models/Post');
const fs = require('fs');

exports.getAllPost = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
};


