const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //First class function
  res.status(200).send("Index Page");
});
app.get("/help", (req, res) => {
  //First class function
  res.status(200).send("Help Page");
});
app.get("/feedback", (req, res) => {
  //First class function
  res.status(200).send("Feedback Page");
});

app.get("*", (req, res) => {
  //Express.js de " * " ile kapsam dışı belirtilir
  res.status(404).send("404 Page Not Found!");
});
const port = 5000;

app.listen(port, () => {
  console.log(`Server ${port} portunda başlatıldı `);
});
