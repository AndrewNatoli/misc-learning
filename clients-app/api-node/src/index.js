const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 3001;

mongoose.connect('mongodb://localhost/clientslearningapp');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});

app.get('/', function(req, res) {
  res.json({
    version: '1.0.0',
    message: 'Order yours now!'
  });
});

app.get('/clients', function(req, res) {
  res.json({
    message: 'Clients!'
  });
});
