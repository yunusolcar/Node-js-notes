const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const blogController = require('./controllers/blogControllers');
const pageController = require('./controllers/pageControllers');

//Connect to Db
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db');

app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routers
app.get('/', blogController.getAllPost);
app.get('/posts/:id', blogController.getPost);

app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage);
app.post('/posts', pageController.getPostPage);

//Port
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
