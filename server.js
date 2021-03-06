const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessages: 'Unable to handle request'
  });
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  res.render('maintenance.hbs');
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is up on port 8000');
});
