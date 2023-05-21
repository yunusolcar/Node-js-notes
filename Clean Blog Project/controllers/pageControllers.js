const Post= require('../models/Post');
const fs = require('fs');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add_post');
};

exports.getPostPage = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};
