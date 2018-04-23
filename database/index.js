const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apateez-sidebar');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {}
// connected 
);

const placesSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    name: String,
    menu_url: String,
    address: String,
    location: String,
    url: String,
    phone: String,
    hours: [],
    coords: {
        lat: String,
        lng: String
    }
  });

const Places = mongoose.model('Places', placesSchema);

module.exports = Places;