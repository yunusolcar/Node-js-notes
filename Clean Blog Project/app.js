const express = require('express');
const path = require('path');
const newPort = 3000;
const app = express();

// Template
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));

// Routers
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/index', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});

// Port
app.listen(newPort, () => {
  console.log(`Server ${newPort} portu çalışıyor`);
});
