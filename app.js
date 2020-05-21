const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  let zone = req.query.zone || 'America/Denver'
  let date = new Date()
  let localDate = date.toLocaleString('en-US', { timeZone: zone }).split(' ')[1]
  
  // res.send(`<p>The current time in ${zone} is ${localDate}<p><input id='timezone' /><button id='updateZone'>Update Timezone</button>`);
  // res.render(__dirname + "/views/index.html", {localDate: localDate, zone: zone});
  res.render('index', { localDate: localDate, zone: zone});
});
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});