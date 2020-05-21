var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.get('/', function (req, res) {
  var date = new Date()
  res.send(`The current time is ${date}`);
});
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});