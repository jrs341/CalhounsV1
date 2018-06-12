// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var path = require(`path`);

// Express Port/App Declaration
var PORT = process.env.PORT || 3000;
var app = express();

// Configure app with morgan and body parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes this is from example and used for React
// app.get(`*`, function(req, res) {
//   res.sendFile('public/index.html', { root: __dirname });
// });

app.get(`/`, function(req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});

// Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});