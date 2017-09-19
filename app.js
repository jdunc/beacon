'use strict';

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const bcrypt = require('bcrypt-as-promised');
const device = require('express-device');
// const session = require('express-session');

// const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const register = require('./routes/register');
const index = require('./routes/index');


// var nocache = require('superagent-no-cache');
var request = require('superagent');
// var prefix = require('superagent-prefix')('/static');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'))
app.use(bodyParser.json());
app.use(fileUpload());
app.use(device.capture());

app.use(register);
app.use(index);

app.use((_req, res, _next) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message)
  }
  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
module.exports = app;
