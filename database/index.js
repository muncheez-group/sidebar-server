const mongoose = require('mongoose');

// const mongoUrlDocker = 'mongodb://database/apateez-sidebar';
// const mongoUrl = 'mongodb://localhost/apateez-sidebar';
const mongoUrl = 'mongodb://localhost/restaurants';

mongoose.connect(mongoUrl);

mongoose.connection.on('connected', () => {
  console.error('Mongoose connection open');
});

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose default connection error: ${err}`);
  mongoose.connect(mongoUrlDocker);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {}); // connected

const placesSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  address: String,
  url: String,
  phone: String,
  hours: String,
  lat: String,
  long: String,
});

const Places = mongoose.model('restaurants', placesSchema);

const clearDb = (cb) => {
  Places.remove({}, cb);
};

module.exports = Places;
exports.clearDb = clearDb;
