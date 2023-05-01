//Create a Server
const http = require('http');

const server = http.createServer((req, res) => {

     const url = req.url;

     if (url === '/') {
          res.writeHead(200, { //Status Code 200 OK
               'Content-Type': 'text/html'
          });
          res.write('<h1>Index Page</h1>');
     } else if (url === '/about') {
          res.writeHead(200, { //Status Code 200 OK
               'Content-Type': 'text/html'
          });
          res.write('About Page');
     } else if (url === '/contact') {
          res.writeHead(200, { //Status Code 200 OK
               'Content-Type': 'text/html'
          });
          res.write('Contact Page');
     } else {
          res.writeHead(404, { //Status Code 404 Page Not Found :)
               'Content-Type': 'text/html'
          });
          res.write('404 Page Not Found!');

     }
     res.end();
});

const port = 3000;

server.listen(port, () => {
     console.log(`Server port ${port}de başlatıldı`);
});