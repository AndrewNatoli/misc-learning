const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { dbConfig, serverConfig } = require('./config');

mongoose.connect(`mongodb://${dbConfig.MONGO_PATH}`);

const app = express();
const PORT = serverConfig.SERVER_PORT;

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
