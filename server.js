const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

// enable CORS without external module
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(path.join(__dirname)));

app.use(express.static(path.join(__dirname, "./build")));

app.listen(port, () => console.log("listening on port " + port));
