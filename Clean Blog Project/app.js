const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const blogController = require('./controllers/blogControllers');
const pageController = require('./controllers/pageControllers');

const app = express();

//Connect to Db
mongoose.connect('mongodb+srv://Cluster1:QiFwp16uflf7ZUaj@cluster1.2fyhkq4.mongodb.net/?clean-blog-db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB CONNECTED!');
  })
  .catch((err) => {
    console.error(err);
  });

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//Routes
app.get('/', blogController.getAllPosts);
app.get('/posts/:id', blogController.getPost);
app.post('/posts/', blogController.createPost);
app.put('/posts/:id', blogController.updatePost);
app.delete('/posts/:id', blogController.deletePost);

app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage);
app.get('/posts/edit/:id', pageController.getEditPage);

//Port
const port = process.env.PORT || 5000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));