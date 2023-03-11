console.log("Hello Node.js");

// Request - response (İstek ve cevap)

var http = require("http");  // require() bir kütüphaneyi projeye dahil eder.
// node modules => http, fs, os ...

var server = http.createServer((req, res) => {

      if (req.url == "/") {
            res.write("<h1>Main Page<h1>");
      } else if (req.url == "/product") {
            res.write("<h1>Products</h1>")
      } else {
            res.write("Page Not Found!")
      }
      res.end();
});

server.listen(3000, () => {
      console.log("node.js server at port 3000");
});

