const express = require('express');
const newPort = 3000;
const app = express();

app.get('/', (request, response) => {
  const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  response.send(blog);
});

app.listen(newPort, () => {
  console.log(`Server ${newPort} portu çalışıyor`);
});
