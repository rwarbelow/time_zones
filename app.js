const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  let zone = req.query.zone || 'America/Denver'
  let date = new Date()
  let localDate = date.toLocaleString('en-US', { timeZone: zone }).split(' ')[1]
  if(localDate.length == 7) {
    localDate = `0${localDate}`
  }
  res.render('index', { localDate: localDate, zone: zone});
});
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});