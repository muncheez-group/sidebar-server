const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api/:id');

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
    hours: []
  });

const Places = mongoose.model('Places', placesSchema);

let findAllPlaces = () => {
    db.find({})
      .exec((err, places) => {
          //
      });
};
 

module.exports = Places;