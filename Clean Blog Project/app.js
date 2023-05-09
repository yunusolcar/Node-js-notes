const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Post = require('./models/Post');

//Connect to Db
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db');

app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routers
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});
app.get('/about', (req, res) => {
  res.render('/about');
});
app.get('/add_post', (req, res) => {
  res.render('/add_post');
});
app.post('/post', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

//Port
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
