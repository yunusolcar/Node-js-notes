const http = require('http');

const myServer = http.createServer((req, res) => {
     const myUrl = req.url;

     if (myUrl === '/') {
          res.writeHead(200, {
               'Content-Type': 'text/html'
          });
          res.write('<h2>Welcome to Index Page</h2>');
     } else if (myUrl === '/about') {
          res.writeHead(200, {
               'Content-Type': 'text/html'
          });
          res.write('<h2>Welcome to About Me Page</h2>');
     } else if (myUrl === '/contact') {
          res.writeHead(200, {
               'Content-Type': 'text/html'
          });
          res.write('<h2>Welcome to Contact Me Page</h2>');
     } else {
          res.writeHead(404, {
               'Content-Type': 'text/html'
          });
          res.write('<h2>404 Page Not Found</h3>');
     }
});

myServer.listen(5000, () => {
     console.log(`Server 5000 portundan başlatıldı`);
});