const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const Places = require('../database/index.js')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/places/:id', function(req, res) {
  // the user was found and is available in req.user
  res.send('What is up ' + req.name + '!');
});







app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
