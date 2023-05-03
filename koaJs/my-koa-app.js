//Koa.js ile web sunucumuzu yazalım

const Koa = require('koa');
const app = new Koa();
const port = 3000;

// response
app.use(async ctx => {
     if (ctx.url === '/') {
          ctx.status = 200;
          ctx.body = '<h1 style="color: blue;">Welcome to Index Page</h1>'

     } else if (ctx.url === '/about') {
          ctx.status = 200;
          ctx.body = '<h1 style="color: blue;">Welcome to About Page</h1>'

     } else if (ctx.url === '/contact') {
          ctx.status = 200;
          ctx.body = '<h1 style="color: blue;">Welcome to Contact Page</h1>'

     } else {
          ctx.status = 404;
          ctx.body = '<h1 style="color: red;">OOPS! 404 Page Not Found</h1>'
     }
});

app.listen(port, () => {
     console.log(`Server port ${port}de başlatıldı`);
});