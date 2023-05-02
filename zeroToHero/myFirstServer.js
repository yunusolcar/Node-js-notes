const http = require('http');

const myServer = http.createServer((req, res) => {
     const myUrl = req.url;

     if (myUrl === '/') {
          res.writeHead(200, {
               'Content-Type': 'text/html'
          });
          res.write('<h1>Index Sayfasi</h1>');
     } else if (myUrl === '/about') {
          res.writeHead(200, {
               'Content-Type': 'text/html'
          });
          res.write('About Me Page');
     } else if (myUrl === '/contact') {
          res.writeHead(200, {
               'Content-Type': 'text/html'
          });
          res.write('Contact Me Page');
     } else {
          res.writeHead(404, {
               'Content-Type': 'text/html'
          });
          res.write('404 Page Not Found');
     }
});

myServer.listen(3000, () => {
     console.log(`Server 3000 portundan başlatıldı`);
});